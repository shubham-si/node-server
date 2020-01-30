"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "adslots": {
        "123": {
            "id": 123,
            "size": "300,200",
            "adslotname": "top",
            "providersid": "AMZP002,APPNXP003"
        },
        "124": {
            "id": 124,
            "size": "300,200",
            "adslotname": "rec",
            "providersid": "OPNXP004"
        }
    },
    "providers": {
        "AMZP002": {
            "id": "AMZP002",
            "providername": "Amazon"
        },
        "APPNXP003": {
            "id": "APPNXP003",
            "providername": "Appnexus"
        },
        "OPNXP004": {
            "id": "OPNXP004",
            "providername": "Openx"
        }
    },
    "providersmap": {
        "123": {
            "AMZP002": {
                "id": "AMZP002",
                "revshare": 4,
                "epc": 321,
                "bidprice": 3,
                "ecc": "AMZ_FRB002"
            },
            "APPNXP003": {
                "id": "APPNXP003",
                "revshare": 5,
                "epc": 321,
                "bidprice": 3,
                "ecc": "APNX_FRB003"
            }
        },
        "124": {
            "OPNXP004": {
                "id": "OPNXP004",
                "revshare": 4,
                "epc": 421,
                "bidprice": 3,
                "ecc": "OPNX_FRB002"
            }
        }
    }
};
