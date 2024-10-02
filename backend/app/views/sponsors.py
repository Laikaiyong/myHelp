import hashlib
from app import get_db_connection
from app.views import blueprint
from flask import jsonify, request, abort
from bson import json_util
import json

@blueprint.route('/sponsors', methods=['GET'])
def get_sponsors():
    db = get_db_connection()
    sponsors_collection = db['sponsors']
    sponsors = json.loads(
        json_util.dumps(
            sponsors_collection.find()
        )
    )
    results = [sponsor for sponsor in sponsors]
    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200

@blueprint.route('/sponsors', methods=['POST'])
def add_sponsor():
    sponsor = request.get_json()
    print(sponsor)
    if not sponsor or 'companyId' not in sponsor or 'sponsorPackage' not in sponsor:
        abort(400, 'Invalid sponsor data')

    db = get_db_connection()
    sponsors_collection = db['sponsors']

    existing_sponsor = json.loads(
        json_util.dumps(
            sponsors_collection.find_one({
                'companyId': sponsor['companyId'],
                'sponsorPackage': sponsor['sponsorPackage']
            })
        )
    )

    if existing_sponsor:
        abort(400, 'Sponsorship already exists for this company')

    sponsor['status'] = 'pending'  # Set initial status
    inserted_sponsor = sponsors_collection.insert_one(sponsor)
    response = jsonify({
        'description': 'Sponsorship created successfully',
        'inserted_id': str(inserted_sponsor.inserted_id)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 201

@blueprint.route('/sponsors/<companyId>', methods=['GET'])
def get_sponsor_by_companyId(companyId):
    db = get_db_connection()
    sponsors_collection = db['sponsors']
    sponsors = json.loads(
        json_util.dumps(
            sponsors_collection.find({'companyId': companyId})
        )
    )
    results = [sponsor for sponsor in sponsors]
    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200

@blueprint.route('/sponsors/<companyId>/<sponsorPackage>', methods=['PUT'])
def update_sponsor(companyId, sponsorPackage):
    sponsor_update = request.get_json()
    if not sponsor_update:
        abort(400, 'Invalid update data')

    db = get_db_connection()
    sponsors_collection = db['sponsors']

    result = sponsors_collection.update_one(
        {'companyId': companyId, 'sponsorPackage': sponsorPackage},
        {'$set': sponsor_update}
    )

    if result.matched_count == 0:
        abort(404, 'Sponsorship not found')

    response = jsonify({'description': 'Sponsorship updated successfully'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200

@blueprint.route('/sponsors/<companyId>/<sponsorPackage>', methods=['DELETE'])
def delete_sponsor(companyId, sponsorPackage):
    db = get_db_connection()
    sponsors_collection = db['sponsors']

    result = sponsors_collection.delete_one({'companyId': companyId, 'sponsorPackage': sponsorPackage})

    if result.deleted_count == 0:
        abort(404, 'Sponsorship not found')

    response = jsonify({'description': 'Sponsorship deleted successfully'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200

@blueprint.route('/sponsors/leaderboard', methods=['GET'])
def get_sponsorship_leaderboard():
    db = get_db_connection()
    sponsors_collection = db['sponsors']
    pipeline = [
        {'$match': {'status': 'approved'}},
        {'$group': {
            '_id': '$companyId',
            'totalSponsorship': {'$sum': '$amount'},
            'companyName': {'$first': '$companyName'}
        }},
        {'$sort': {'totalSponsorship': -1}},
        {'$limit': 10}
    ]
    leaderboard = json.loads(json_util.dumps(list(sponsors_collection.aggregate(pipeline))))
    response = jsonify(leaderboard)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200