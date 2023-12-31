from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import sqlite3

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

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

    return app