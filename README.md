## Docs
### Structure
Every app will be an api endpoint or endpoints,
Each have a services, folder there should be all db interaction logic, a repository pattern like.
```
|__users
    |...
    |__services
        UsersService.py
    admin.py
    apps.py
    models.py
    serializers.py
    tests.py
    urls.py
    views.py
```

### Authentication
For using authentication you can use the use_user.py utilitie functions
If you want to prevent the use_user function from throwing exceptions just add False in the last parameter.
The Exception will be handled by error_response(exception.get_message(request)),
Note: All BaseHttpException classes has translations in get_message
```
@csrf_exempt
@api_view(["GET"])
def get_users(request):
    try:
        user = use_user(request)
        print(user)
        all_users = User.objects.all()
        return Response(UserSerializer(all_users, many=True).data)
    except BaseHttpException as exception: 
        return error_response(exception.get_message(request), exception.status)
```