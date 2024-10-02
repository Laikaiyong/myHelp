import hashlib
from app import get_db_connection
from app.views import blueprint
from flask import jsonify, request, abort

@blueprint.route('/sponsors', methods=['GET'])
def get_sponsors():
    db = get_db_connection()
    users_collection = db['sponsors']
    users = users_collection.find()
    results = [user for user in users]
    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 200


@blueprint.route('/sponsors', methods=['POST'])
def add_sponsors():
    user = request.get_json()
    if not user or 'name' not in user or 'email' not in user:
        abort(400, 'Invalid user data')
    
    db = get_db_connection()
    users_collection = db['sponsors']
    
    old_user = users_collection.find_one({'email': user['email']})  # Access email using dictionary syntax
    if old_user:
        abort(400, 'User already created')

    inserted_user = users_collection.insert_one(user)
    response = jsonify({
        'description': 'User created successfully',
        'inserted_id': str(inserted_user.inserted_id)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response, 201