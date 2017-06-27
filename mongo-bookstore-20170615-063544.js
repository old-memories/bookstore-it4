
/** image.chunks indexes **/
db.getCollection("image.chunks").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** image.chunks indexes **/
db.getCollection("image.chunks").ensureIndex({
  "files_id": NumberInt(1),
  "n": NumberInt(1)
},{
  "unique": true
});

/** image.files indexes **/
db.getCollection("image.files").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** image.files indexes **/
db.getCollection("image.files").ensureIndex({
  "filename": NumberInt(1),
  "uploadDate": NumberInt(1)
},[
  
]);

/** userprofile indexes **/
db.getCollection("userprofile").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** image.chunks records **/
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5938f39394b4d5265c2fb463"),
  "files_id": ObjectId("5938f39394b4d5265c2fb462"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5938f41394b4d5265c2fb465"),
  "files_id": ObjectId("5938f41394b4d5265c2fb464"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5938fbaa94b4d52d3c767bfe"),
  "files_id": ObjectId("5938fbaa94b4d52d3c767bfd"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("593904f194b4d50db05a5a94"),
  "files_id": ObjectId("593904f194b4d50db05a5a93"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939094494b4d504fc15c0d6"),
  "files_id": ObjectId("5939094494b4d504fc15c0d5"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59390bde94b4d504fc15c0d8"),
  "files_id": ObjectId("59390bde94b4d504fc15c0d7"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59390c2694b4d504fc15c0da"),
  "files_id": ObjectId("59390c2694b4d504fc15c0d9"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59390c8194b4d504fc15c0dc"),
  "files_id": ObjectId("59390c8194b4d504fc15c0db"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939111f94b4d51a0cfd000b"),
  "files_id": ObjectId("5939111f94b4d51a0cfd000a"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e204"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e205"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e206"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e207"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e208"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e209"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e20a"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e20b"),
  "files_id": ObjectId("59396a5494b4d52d88e1e203"),
  "n": NumberInt(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e20d"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e20e"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e20f"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e210"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e211"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e212"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e213"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e214"),
  "files_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "n": NumberInt(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e216"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e217"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e218"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e219"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e21a"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e21b"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e21c"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59396db794b4d52d88e1e21d"),
  "files_id": ObjectId("59396db794b4d52d88e1e215"),
  "n": NumberInt(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df61"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df62"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(1),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df63"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(2),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df64"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(3),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df65"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(4),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df66"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(5),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df67"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(6),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("5939733894b4d51f4c20df68"),
  "files_id": ObjectId("5939733894b4d51f4c20df60"),
  "n": NumberInt(7),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("593b9c4894b4d5061870f531"),
  "files_id": ObjectId("593b9c4894b4d5061870f530"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59420ad9c19d582c8c245a1a"),
  "files_id": ObjectId("59420ad9c19d582c8c245a19"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});
db.getCollection("image.chunks").insert({
  "_id": ObjectId("59420c8ac19d582c8c245a1c"),
  "files_id": ObjectId("59420c8ac19d582c8c245a1b"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});

/** image.files records **/
db.getCollection("image.files").insert({
  "_id": ObjectId("5938f39394b4d5265c2fb462"),
  "filename": "99286C64089D7B6B2C55FF9E5905494B",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T06:49:55.765Z"),
  "length": NumberInt(7552),
  "contentType": null,
  "md5": "1b8e0f3f724342bc24fd5aa7247f3cf9"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("5938f41394b4d5265c2fb464"),
  "filename": "5B699E308A462D2CDFAFA44D7B282909",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T06:52:03.547Z"),
  "length": NumberInt(8663),
  "contentType": null,
  "md5": "489f29198ae77e4a5c82076d2d40a25f"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("5938fbaa94b4d52d3c767bfd"),
  "filename": "83B80FB184A7ADEAAECE07847961288F",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T07:24:26.314Z"),
  "length": NumberInt(7552),
  "contentType": null,
  "md5": "1b8e0f3f724342bc24fd5aa7247f3cf9"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("593904f194b4d50db05a5a93"),
  "filename": "65D24314E478E1823B16C6FA9B06C426",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:04:01.719Z"),
  "length": NumberInt(7552),
  "contentType": null,
  "md5": "1b8e0f3f724342bc24fd5aa7247f3cf9"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("5939094494b4d504fc15c0d5"),
  "filename": "975AB85CB190295C9A94202F5794074F",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:22:28.88Z"),
  "length": NumberInt(8663),
  "contentType": null,
  "md5": "489f29198ae77e4a5c82076d2d40a25f"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59390bde94b4d504fc15c0d7"),
  "filename": "A5EE494959388861719D86FC9F961EFC",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:33:34.364Z"),
  "length": NumberInt(9984),
  "contentType": null,
  "md5": "a60421c9a41b3acff60cab97ededb594"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59390c2694b4d504fc15c0d9"),
  "filename": "1317E24B9133761B85DCE27BBA6C2C6C",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:34:46.435Z"),
  "length": NumberInt(10085),
  "contentType": null,
  "md5": "ac61419a065fb4e2ecd13f853ea7b800"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59390c8194b4d504fc15c0db"),
  "filename": "B9580F12BE07520D2A5CE9C2B915FCAE",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:36:17.847Z"),
  "length": NumberInt(7668),
  "contentType": null,
  "md5": "867b07233eeaff432f85e93b110f8c72"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("5939111f94b4d51a0cfd000a"),
  "filename": "95E5CA4EF1AF4966136361F2AA448D89",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T08:55:59.257Z"),
  "length": NumberInt(7668),
  "contentType": null,
  "md5": "867b07233eeaff432f85e93b110f8c72"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59396a5494b4d52d88e1e203"),
  "filename": "F6860F0276AD299FB97E7FEDB016D2E9",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T15:16:36.613Z"),
  "length": NumberInt(1918858),
  "contentType": null,
  "md5": "377b70a4c055879752ade1e9793187db"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59396b2294b4d52d88e1e20c"),
  "filename": "5D55C4E86CC36A381B9B9B4B784A4D5E",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T15:20:02.344Z"),
  "length": NumberInt(1918858),
  "contentType": null,
  "md5": "377b70a4c055879752ade1e9793187db"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59396db794b4d52d88e1e215"),
  "filename": "382A8B279067EA30D2F441E79D8AFC39",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T15:31:03.304Z"),
  "length": NumberInt(1918858),
  "contentType": null,
  "md5": "377b70a4c055879752ade1e9793187db"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("5939733894b4d51f4c20df60"),
  "filename": "75454D1B809A913903F4BEA433C81455",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-08T15:54:32.501Z"),
  "length": NumberInt(1918858),
  "contentType": null,
  "md5": "377b70a4c055879752ade1e9793187db"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("593b9c4894b4d5061870f530"),
  "filename": "4AD69D6C3AC14ACD89C24F5B13675A83",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-10T07:14:16.667Z"),
  "length": NumberInt(7877),
  "contentType": null,
  "md5": "92ceef06f0cdc9702e97c759c9c8db21"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59420ad9c19d582c8c245a19"),
  "filename": "84396EBD7935F0A8FB1094F86A848350",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-15T04:19:37.46Z"),
  "length": NumberInt(6261),
  "contentType": null,
  "md5": "4f302b75bb575b57dbf5ca36918d7cf8"
});
db.getCollection("image.files").insert({
  "_id": ObjectId("59420c8ac19d582c8c245a1b"),
  "filename": "4155B1C22940FE23A75325F80FB90EB7",
  "aliases": null,
  "chunkSize": NumberInt(261120),
  "uploadDate": ISODate("2017-06-15T04:26:50.355Z"),
  "length": NumberInt(6807),
  "contentType": null,
  "md5": "8ed04a86167c68d9d80a71c2cf983cc5"
});

/** userprofile records **/
db.getCollection("userprofile").insert({
  "_id": ObjectId("5939732594b4d51f4c20df5f"),
  "message": "1111111111111112222222222222",
  "imageid": "75454D1B809A913903F4BEA433C81455"
});
db.getCollection("userprofile").insert({
  "_id": ObjectId("593b9c2294b4d5061870f52f"),
  "message": "message of user1",
  "imageid": "4AD69D6C3AC14ACD89C24F5B13675A83"
});
db.getCollection("userprofile").insert({
  "_id": ObjectId("59420a75c19d582c8c245a18"),
  "message": "This is my account.",
  "imageid": "84396EBD7935F0A8FB1094F86A848350"
});
