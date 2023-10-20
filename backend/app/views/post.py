import hashlib

from app import get_db_connection

from app.views import blueprint

from flask import jsonify, request, abort


@blueprint.route('/posts', methods=['GET'])
def get_posts():
    db = get_db_connection()
    posts = db.execute('SELECT * FROM posts').fetchall()
    db.close()
    
    results = [
        tuple(row)
        for row in posts
    ]

    return jsonify(results)


@blueprint.route('/posts', methods=['POST'])
def add_user():
    db = get_db_connection()
    title = request.form['title']
    content = request.form['content']

    if not title or not content:
        return jsonify({
            "description": "Please enter title or content"
        })
    else:
        db.execute('INSERT INTO posts (title, content) VALUES (?, ?)',
                        (title, content))
        db.commit()
        db.close()
        
    return jsonify({
            "description": "Created successfully"
        }), 201