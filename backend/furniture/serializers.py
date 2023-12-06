from rest_framework import serializers
from .models import Furniture

class FurnitureSerializer(serializers.Serializer):
    class Meta:
        model = Furniture
        fields = ["name", "description", "price", 
                "color", "image", "category", "quantity"]