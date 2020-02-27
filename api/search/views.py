from django.conf import settings
from urllib.request import Request, urlopen
from rest_framework.response import Response
from rest_framework.views import APIView

import json
import logging

logger = logging.getLogger(__name__)


class Search(APIView):
    def post(self, request):
        json_data = {"result": [], "total": 0}

        if "value" in request.data:
            remote = Request("https://server.givz.com/es/search/")
            remote.add_header("content-type", "application/json")
            parameters = {
                "value": request.data.get("value", ""),
                "from_page": request.data.get("from_page", 0),
                "size": request.data.get("size", 5)
            }
            data = urlopen(remote, bytes(json.dumps(parameters), encoding="utf-8")).read()
            json_data = json.loads(data)

        return Response(json_data)