# from app.helpers import require_api_token

from flask import Blueprint, jsonify

blueprint = Blueprint('views', __name__)

# Route Declaration
from app.views import user, sponsors

# @blueprint.route('/test')
# def test():
#     result = (
#         db
#         .session
#         .query(
#             User,
#             Role
#         )
#         .select_from(User)
#         .join(
#             Role.id == User.role_id
#         )
#         .with_entities(
#             User.username,
#             Role.name
#         )
#         .all()
#     )

#     # Normalizing data
#     (
#         users, 
#         roles 
#     ) = list(zip(*result))

#     # Exchange tuple to list
#     users = list(users)
#     roles = list(roles)

#     return jsonify(
#         {
#             'users': users,
#             'roles': roles
#         }
#     )

# @blueprint.route('/')
# def index(*args, **kwargs):
#     _user = kwargs['user']
#     return jsonify(_user.serialize())