import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print("WebSocket Connected")
        await self.accept()

    async def disconnect(self, close_code):
        print("WebSocket Disconnected")

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get("message", "")

        # Echo back message
        await self.send(text_data=json.dumps({
            "message": message
        }))

class StoryConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.send(text_data=json.dumps({"message": "WebSocket connected"}))

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        # Handle received data if needed
        pass

    async def send_stories_update(self, event):
        await self.send(text_data=json.dumps({"new_stories": event["data"]}))