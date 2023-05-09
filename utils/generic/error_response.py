from rest_framework.response import Response

def error_response(message: str, status: int=400):
    return Response({"error": message, }, status)