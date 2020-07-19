db = db.getSiblingDB("assignment");
db.msgBoard.drop();
db.msgBoard.insertMany([
    {"id":0,"name":"Oliver","msg":"Hello React","dateTime": "2020-5-31 16:34:27","showpopup": false},
    {"id":1,"name":"Zhou","msg":"Hello Redux","dateTime": "2020-5-30 16:34:27","showpopup": false}]);
