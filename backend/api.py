from app import create_app
from flask import Response

app = create_app()

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


@app.before_request
def basic_authentication(request):
    if request.method.lower() == 'options':
        return Response()