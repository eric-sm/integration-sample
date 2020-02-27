from django.conf import settings
from urllib.request import Request, urlopen
from rest_framework.response import Response
from rest_framework.views import APIView

import json
import logging

logger = logging.getLogger(__name__)


class SPLC(APIView):
    def get(self, request):
        data = ""

        with open("data/splc-hate-groups.csv", "r") as file:
            data = file.read()

        return Response(data)