from flask import Flask, Blueprint
from pymongo import MongoClient
from flask_cors import CORS
from flask import Response

def get_db_connection():
    client = MongoClient("mongodb+srv://vandyck:vandyck@myhelp.1dbal.mongodb.net/?retryWrites=true&w=majority&appName=myhelp")
    db = client["myhelp"]
    return db

def create_app():
    app = Flask(__name__)
    # app.config.from_object(Config)

    # Initializa DB
    # db.init_app(app)

    # Initialize Migrate
    # migrate.init_app(app, db)

    from app.views import blueprint as views_bp
    app.register_blueprint(views_bp)

    from app.errors import blueprint as errors_bp
    app.register_blueprint(errors_bp)
    
    CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"], "allow_headers": "*"}})

    return app