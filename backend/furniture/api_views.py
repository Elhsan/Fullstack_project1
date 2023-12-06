from .usecases import *
from .models import *
from backend.usecases import *
from rest_framework.response import Response
from rest_framework.status import *
from .serializers import FurnitureSerializer

class FurnitureList(NoAuthApiView):
    def get(self, request, *args, **kwargs):
        furniture = Furniture.objects.all()
        serializer = FurnitureSerializer(furniture, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    
    def post(self, request):
        serializer = FurnitureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
