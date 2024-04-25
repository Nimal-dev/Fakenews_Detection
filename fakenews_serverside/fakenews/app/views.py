from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
# from . serializer import *
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# class ReactView(APIView):
#     def get(self, request):
#         output = [
#             {"email": output.email, 
#              "password":output.password
#              }
#              for output in React.objects.all()
#         ]
#         return Response(output)
#     def post(self, request):
#         data = request.data
#         serializer=ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

# def testFunctionGet(request):
#     return JsonResponse('Get Page',safe=False)

# @csrf_exempt
# def testFunctionPost(request):
#     data = json.loads(request.body)
#     reg = {
#         'fullname':data['name'],
#         'username':data['email'],
#         'password':data['name'],
#     }

#     # Registration.objects.create(username=data['name'],password=data['passw])
#     Registration.objects.create(**reg)
#     print(data['name'])
#     return JsonResponse('Post Page',safe=False)


@csrf_exempt
def userRegistration(request):

    data = json.loads(request.body)

    user = User.objects.create_user(**data)
    return JsonResponse({'status': 200, 'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'first_name': user.first_name, 
                }})
@csrf_exempt
def userLogin(request):
    data = json.loads(request.body)
    user = authenticate(request, **data)
    if user is not None:
        login(request, user)
        return JsonResponse({'status': 200, 'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'first_name': user.first_name, 
                }})
    else:
        return JsonResponse({'status':401})





# Create your views here.
