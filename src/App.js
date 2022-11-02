import './App.css';

const apps = {
  "total_results": 28,
  "total_pages": 1,
  "prev_url": null,
  "next_url": null,
  "resources": [
    {
      "metadata": {
        "guid": "1fa45992-c542-4d63-98ef-e3f4812a5777",
        "url": "/v2/apps/1fa45992-c542-4d63-98ef-e3f4812a5777",
        "created_at": "2015-01-22T20:23:09Z",
        "updated_at": "2016-08-12T17:34:24Z"
      },
      "entity": {
        "name": "cannedair-staging-web",
        "production": false,
        "space_guid": "e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/ruby-buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {
          "CACHER_ENVIRONMENT": "sandbox",
          "CACHER_PASSWORD": "prawn2saint",
          "CACHER_USERNAME": "CannedAirCacheAPI",
          "CANNEDAIR_CORS_ALLOWED_ORIGINS": "https://businesstime-angular.cfapps.io",
          "GIT_SHA": "81e753104bf7e7162bc88e8d34c05ccdb6f79afc",
          "NEW_RELIC_APP_NAME": "cannedair-staging",
          "NEW_RELIC_LICENSE_KEY": "3ec5c68149f455ff327d13182b349678eec658ec",
          "OPENAIR_PRODUCTION_COMPANY": "Pivotal",
          "OPENAIR_PRODUCTION_KEY": "G2o5Ww6zzjXocB9M26cw",
          "OPENAIR_PRODUCTION_URL": "https://www.openair.com",
          "OPENAIR_SANDBOX_COMPANY": "Pivotal IAD",
          "OPENAIR_SANDBOX_KEY": "ljv7gySstdywGYwzslrM",
          "OPENAIR_SANDBOX_URL": "https://sandbox.openair.com",
          "RAILS_ENV": "staging",
          "XML_CLIENT": "RW Android"
        },
        "memory": 512,
        "instances": 2,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "24cdf8e3-b8a5-4842-8006-9b5011ac36a0",
        "command": "bundle exec rake db:migrate && bundle exec unicorn -p $PORT -c ./config/unicorn.rb",
        "console": true,
        "debug": null,
        "staging_task_id": "1fa45992-c542-4d63-98ef-e3f4812a5777",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/1fa45992-c542-4d63-98ef-e3f4812a5777/routes",
        "events_url": "/v2/apps/1fa45992-c542-4d63-98ef-e3f4812a5777/events",
        "service_bindings_url": "/v2/apps/1fa45992-c542-4d63-98ef-e3f4812a5777/service_bindings",
        "route_mappings_url": "/v2/apps/1fa45992-c542-4d63-98ef-e3f4812a5777/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "e8867532-7714-476a-8f55-0458ff46969a",
        "url": "/v2/apps/e8867532-7714-476a-8f55-0458ff46969a",
        "created_at": "2015-01-22T20:19:23Z",
        "updated_at": "2016-08-12T21:35:52Z"
      },
      "entity": {
        "name": "cannedair-production-web",
        "production": false,
        "space_guid": "e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/ruby-buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {
          "CACHER_ENVIRONMENT": "production",
          "CACHER_PASSWORD": "prawn2saint",
          "CACHER_USERNAME": "augur_api",
          "GIT_SHA": "81e753104bf7e7162bc88e8d34c05ccdb6f79afc",
          "NEW_RELIC_APP_NAME": "cannedair-production",
          "NEW_RELIC_LICENSE_KEY": "3ec5c68149f455ff327d13182b349678eec658ec",
          "OPENAIR_ENVIRONMENT": "production",
          "OPENAIR_PRODUCTION_COMPANY": "Pivotal",
          "OPENAIR_PRODUCTION_KEY": "G2o5Ww6zzjXocB9M26cw",
          "OPENAIR_PRODUCTION_URL": "https://www.openair.com",
          "OPENAIR_SANDBOX_COMPANY": "Pivotal IAD",
          "OPENAIR_SANDBOX_KEY": "ljv7gySstdywGYwzslrM",
          "OPENAIR_SANDBOX_URL": "https://sandbox.openair.com",
          "XML_CLIENT": "RW Android"
        },
        "memory": 1024,
        "instances": 4,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "3eaa2fc4-f728-4f91-97e6-5a2e8ee67d51",
        "command": "bundle exec rake db:migrate && bundle exec unicorn -p $PORT -c ./config/unicorn.rb",
        "console": true,
        "debug": null,
        "staging_task_id": "e8867532-7714-476a-8f55-0458ff46969a",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": 180,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/e8867532-7714-476a-8f55-0458ff46969a/routes",
        "events_url": "/v2/apps/e8867532-7714-476a-8f55-0458ff46969a/events",
        "service_bindings_url": "/v2/apps/e8867532-7714-476a-8f55-0458ff46969a/service_bindings",
        "route_mappings_url": "/v2/apps/e8867532-7714-476a-8f55-0458ff46969a/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "961fe4aa-d0bd-4d17-b16e-b965af4063b2",
        "url": "/v2/apps/961fe4aa-d0bd-4d17-b16e-b965af4063b2",
        "created_at": "2015-01-02T00:44:35Z",
        "updated_at": "2017-03-02T17:18:53Z"
      },
      "entity": {
        "name": "pivotal-life",
        "production": false,
        "space_guid": "b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/buildpack-ruby.git",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {
          "AUTH_PASSWORD": "0Z9OECr4ns8",
          "AUTH_USERNAME": "pivotal",
          "FORECAST_API_KEY": "b7555667a4d8510dc595394319f56902",
          "GOOGLE_CLIENT_ID": "448417189650-a8bvuoiml1cnj77ceoatupf252i9vm4l.apps.googleusercontent.com",
          "GOOGLE_CLIENT_SECRET": "mRBge_5QoeeV7zF9kJl21DA-",
          "GOOGLE_REFRESH_TOKEN": "1/fwaeZ4B3o9nhUoYEYMQ32e4mTNH_GyAo_4W5PrB4olx90RDknAdJa_sgfheVM0XT",
          "GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL": "874886576903-dj1igbeu4lnk97q8ujabol2ev5pv0f1p@developer.gserviceaccount.com",
          "GOOGLE_SERVICE_ACCOUNT_CLIENT_ID": "874886576903-dj1igbeu4lnk97q8ujabol2ev5pv0f1p.apps.googleusercontent.com",
          "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyIUtB0XgeMm2w\\nkgvr/dL0WboR4kf0xI/CuBF5/uBYqGD0xfCjsl3jjMg+cK/EQ0+dR4U1uqMlmHif\\n2Qa8q5/vZ+eDIguDEN/0mAY/7wXKc9nXiIC7Q7ltUS27s7R3EsDuib1fpgO3F5Ey\\nnLW/XPaSSoCP2dHyttxJChEAbsK0fFkQMy5qCh7G0wco72DJfx+QnWLCn0NOFQWP\\nyAUUf6R6+VYKycPf6OaNPHVZAfAcEdQ04MTQPnkDXOvI7Z3XiZ+0SrxIKYva+Bvm\\nXKEPRgxR5T1hNLsuYQvWytjzYU8Z7/ZxIv+gGqny2v7mXyUVqYQaIvERaTu4Jw54\\nfVmlgOs5AgMBAAECggEBAJisVp9sFOL03/UFyDgVjnimawenBXtx+bGwKDKC1PDI\\nKInDGdSELVq6MGrsFIpIEvW/9hmuBOVVQJXo4pBVHTiJuvE2/dzxWrJ+lmS3ziPO\\nlfjY41Ud39ElUeheRyADr98DqY9QcEC+b1GM5W3GFQQf3P7ud7brKfVkLlxLkpAz\\n0S5DD/9kLuBuzCetQYebYJRFqU7OlSdXjWc415Seu03bpe78zw8ya7/zhCrIFA49\\nS5ZzkomSfq3D5q9eKNvDf5cVXBBNxIKKH9nuDNhv3jw1yqByGf5kJGUxmFM89ECQ\\nuvQZctf9q7aollOxbhlsrcwkk3Po3gwiKCusQ6OWgoECgYEA42O4w4eM5XlZnA0t\\nv4f7m2yx0mZjHWL06UF8itnvCPEVnGd6GThFKU40btUr+moD/uikjsqEsixpaJwm\\nG+3/7Rz3C8Z0xPCWTgwZLBXGuuRs/R3Tarbrqu1iHGqEr+gGTk4dlre2MZrkR22R\\nY373S7CId0MFvqHT84K1w2F5JXECgYEAyIrpN/PUZObLh0WNKt21jorKjkZ/AcqZ\\njRr0DmCxDFyY4x8/1Wd+uARdp++m1yLOJuDfh447bXvgNZPWzAELPR0x52rHMLGq\\nXMtNOFuDMrD/jiCRCLX+/lz3ArBsnmd2rEaattItQwFrdkQrjihlcrQy9n9dTeTo\\nFsgX2Q+yHkkCgYBWBAgFdwY2XAQowtd2Z2MnNSPDGlYN7LwGbG5HPA9vC3uIUaBf\\nX+jRqjKtZlgffvEKAUkWdsdheulY2BCWah5wvI87VhQf136UAYGYKpilY/lSenDa\\nIl3dp7SAWU7eF+AiyOvqco4qD5Sg7HKd945mhF3q92B57091AxHs2bdxEQKBgQCL\\nlzWzPsQO4B+3rxAOUHk6GR3ZXvS1GIM9lw9emqtigWniXjQepYWtLUzLwqMNiSqa\\nIVk2kCiJkvqEEL4pDmj2R0YfYVH5cRG2ucSsf/aY6F9aXQzXVWeDQs6lToyszjPq\\nwtKagz4CMBDPJ7BxqWjEKO54ajtWJwnuIaWH78b6EQKBgHGowdIGbe2arhSWj74q\\nNrHYpjMhOjUSSTAhl1FaRfyjwnNrjD8tVF7oQjzpQ6R1oNcZSpKPP31VxRnAnjLR\\nIHjoSsDlBYn3/cQQ5Mk6jh2HJMoJ8ut0N52S6iQj4zKaagMDKa+7IdKGRCs/JOrD\\nPU3wbAwFuD9lxKrAjwPTU5yX\\n-----END PRIVATE KEY-----\\n",
          "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID": "9d4e825afcf7c5ef45e0c1ad45ca372ec874ada5",
          "GOOGLE_SERVICE_ACCOUNT_TYPE": "service_account",
          "MOVEMBER_TEAM_IDS": "[1712277,1712209,1712237,1637385,1727569,1912725,1858657]",
          "PIVOTS_AUTH_TOKEN": "q2jGynbi1TNYyTp3nSRy",
          "PIVOTS_EMAIL": "accounts+pivotal-life@pivotallabs.com",
          "PIVOTS_TEXTS_BASIC_PASSWORD": "ltqWXtLtjm9ACrmEpk0Pe1OgXflny6SB",
          "PIVOTS_TEXTS_BASIC_USERNAME": "G99sGUnamHJTKCOywhZXEYTkryg20Vre",
          "PIVOTS_TEXTS_PHONE_NUMBER": "508 758 0124",
          "PIVOTS_TEXTS_URL": "https://rrged2zgsgtzqfmq.cfapps.io/pivot-texts/today",
          "SF511_AUTH_TOKEN": "85ba60c5-3fcd-49c1-9616-241f0a54f6cb",
          "TOMTOM_API_KEY": "njd7pjfvt4axhbsf5uwz6vp7",
          "TWITTER_CONSUMER_KEY": "TNWq8PDymfeAbToeAKCOjTKh0",
          "TWITTER_CONSUMER_SECRET": "i8bOL58rKN6jSZ40mrIyQ1ZmfQUhtaba0p5T9zxwI4C3Cq72mL",
          "TWITTER_OAUTH_SECRET": "SPtNTSzElp2Opz1IvbTadnsdD04I7fuOxa2yMhdwRKYHd",
          "TWITTER_OAUTH_TOKEN": "4816869077-rEHOJ1YUbtZCd4kE750QboDn3pkRxskri9pQlxm",
          "TWITTER_PICTURE_HASHTAG": "PivotalLife",
          "YELP_AUTH_SECRET": "I5NVv_aocuDVJui3cxLaYfcTy7w",
          "YELP_AUTH_TOKEN": "9i4Rok3oTe8uEAVTYEVqSCy5O83cJzyP",
          "YELP_CONSUMER_KEY": "UEaEPHSvPkfODc4Ke6pCXQ",
          "YELP_CONSUMER_SECRET": "EyXaWqRhNUnmDjzhCuIka64bAVw"
        },
        "memory": 512,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "5e00c2f2-d6b9-4eb4-980a-af541080cd3d",
        "command": null,
        "console": true,
        "debug": null,
        "staging_task_id": "5561b1cb-9202-4b45-8e8c-05e5bcd4fe96",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2017-03-02T17:18:46Z",
        "detected_start_command": "bundle exec thin start -R config.ru -e $RACK_ENV -p $PORT",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/961fe4aa-d0bd-4d17-b16e-b965af4063b2/routes",
        "events_url": "/v2/apps/961fe4aa-d0bd-4d17-b16e-b965af4063b2/events",
        "service_bindings_url": "/v2/apps/961fe4aa-d0bd-4d17-b16e-b965af4063b2/service_bindings",
        "route_mappings_url": "/v2/apps/961fe4aa-d0bd-4d17-b16e-b965af4063b2/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "d1a20fad-abcf-493e-90b0-3cc83067da5e",
        "url": "/v2/apps/d1a20fad-abcf-493e-90b0-3cc83067da5e",
        "created_at": "2014-02-21T20:29:01Z",
        "updated_at": "2015-11-24T00:28:44Z"
      },
      "entity": {
        "name": "pong-server",
        "production": false,
        "space_guid": "fffe715b-3878-4697-8063-f00c773a3556",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "29697c17-4f29-4cf7-83d0-6733c1b392c6",
        "command": "rake db:migrate",
        "console": false,
        "debug": null,
        "staging_task_id": "d1a20fad-abcf-493e-90b0-3cc83067da5e",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "rake db:migrate",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/fffe715b-3878-4697-8063-f00c773a3556",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/d1a20fad-abcf-493e-90b0-3cc83067da5e/routes",
        "events_url": "/v2/apps/d1a20fad-abcf-493e-90b0-3cc83067da5e/events",
        "service_bindings_url": "/v2/apps/d1a20fad-abcf-493e-90b0-3cc83067da5e/service_bindings",
        "route_mappings_url": "/v2/apps/d1a20fad-abcf-493e-90b0-3cc83067da5e/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "96d2fe94-3aae-44e5-a63f-c645a9480d91",
        "url": "/v2/apps/96d2fe94-3aae-44e5-a63f-c645a9480d91",
        "created_at": "2014-10-16T05:21:44Z",
        "updated_at": "2015-11-24T00:28:59Z"
      },
      "entity": {
        "name": "armory-staging",
        "production": false,
        "space_guid": "e28eeaeb-5fb1-42e5-9439-56948552b283",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "DEVISE_SECRET_KEY": "0b5c7de70d454149d73f1e81176a3ffb48c5d690621eacccaf0ab715d7d8bdf5def7943057b8c1f7885b3d05518545067afa52a8705b5ccdca76c4397da780d5",
          "OKTA_CERT_FINGERPRINT": "63:5C:33:BB:FD:C5:31:EF:D3:5B:AF:24:FD:DF:9C:C9:69:D2:69:46",
          "OKTA_REDIRECT_URL": "https://pivotal.oktapreview.com/home/pivotal_armorystaging_1/0oa2cy8ms9SIKLFBFFSR/5257"
        },
        "memory": 256,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "88678537-43ec-41e2-ac6b-2cd01c50b5ca",
        "command": "bundle exec rake db:migrate && bundle exec rails s -p $PORT",
        "console": true,
        "debug": null,
        "staging_task_id": "96d2fe94-3aae-44e5-a63f-c645a9480d91",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rake db:migrate && bundle exec rails s -p $PORT",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/e28eeaeb-5fb1-42e5-9439-56948552b283",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/96d2fe94-3aae-44e5-a63f-c645a9480d91/routes",
        "events_url": "/v2/apps/96d2fe94-3aae-44e5-a63f-c645a9480d91/events",
        "service_bindings_url": "/v2/apps/96d2fe94-3aae-44e5-a63f-c645a9480d91/service_bindings",
        "route_mappings_url": "/v2/apps/96d2fe94-3aae-44e5-a63f-c645a9480d91/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "726c623e-1b69-49b0-a7a9-ea71eaf57902",
        "url": "/v2/apps/726c623e-1b69-49b0-a7a9-ea71eaf57902",
        "created_at": "2015-01-22T20:25:45Z",
        "updated_at": "2016-08-12T17:36:28Z"
      },
      "entity": {
        "name": "cannedair-staging-clock",
        "production": false,
        "space_guid": "e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/ruby-buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {
          "CACHER_ENVIRONMENT": "sandbox",
          "CACHER_PASSWORD": "prawn2saint",
          "CACHER_USERNAME": "augur_api",
          "CANNEDAIR_CORS_ALLOWED_ORIGINS": "https://businesstime-angular.cfapps.io",
          "GIT_SHA": "81e753104bf7e7162bc88e8d34c05ccdb6f79afc",
          "NEW_RELIC_APP_NAME": "cannedair-staging",
          "NEW_RELIC_LICENSE_KEY": "3ec5c68149f455ff327d13182b349678eec658ec",
          "OPENAIR_PRODUCTION_COMPANY": "Pivotal",
          "OPENAIR_PRODUCTION_KEY": "G2o5Ww6zzjXocB9M26cw",
          "OPENAIR_PRODUCTION_URL": "https://www.openair.com",
          "OPENAIR_SANDBOX_COMPANY": "Pivotal IAD",
          "OPENAIR_SANDBOX_KEY": "ljv7gySstdywGYwzslrM",
          "OPENAIR_SANDBOX_URL": "https://sandbox.openair.com",
          "RAILS_ENV": "staging",
          "XML_CLIENT": "RW Android"
        },
        "memory": 512,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "b970cf93-a57a-4ae6-b6b4-ff7a4bf2393b",
        "command": "bundle exec clockwork lib/clock.rb",
        "console": false,
        "debug": null,
        "staging_task_id": "726c623e-1b69-49b0-a7a9-ea71eaf57902",
        "package_state": "STAGED",
        "health_check_type": "none",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/726c623e-1b69-49b0-a7a9-ea71eaf57902/routes",
        "events_url": "/v2/apps/726c623e-1b69-49b0-a7a9-ea71eaf57902/events",
        "service_bindings_url": "/v2/apps/726c623e-1b69-49b0-a7a9-ea71eaf57902/service_bindings",
        "route_mappings_url": "/v2/apps/726c623e-1b69-49b0-a7a9-ea71eaf57902/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "a55cdebc-c902-460f-bd29-491d4895f7c0",
        "url": "/v2/apps/a55cdebc-c902-460f-bd29-491d4895f7c0",
        "created_at": "2014-03-18T17:58:26Z",
        "updated_at": "2015-11-24T00:28:53Z"
      },
      "entity": {
        "name": "omnia-module-ebanking",
        "production": false,
        "space_guid": "ca2701a0-5af8-448a-89ce-4f94bd009536",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/java-buildpack",
        "detected_buildpack": null,
        "detected_buildpack_guid": null,
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "926e36d1-dbdf-49ae-a5ce-d938c166b0c9",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "a55cdebc-c902-460f-bd29-491d4895f7c0",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-1.1.1_RELEASE -memorySizes=metaspace:64m.. -memoryWeights=heap:75,metaspace:10,stack:5,native:10 -totMemory=$MEMORY_LIMIT) && JAVA_HOME=$PWD/.java-buildpack/open_jdk_jre JAVA_OPTS=\"-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY -Daccess.logging.enabled=false -Dhttp.port=$PORT\" $PWD/.java-buildpack/tomcat/bin/catalina.sh run",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/ca2701a0-5af8-448a-89ce-4f94bd009536",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/a55cdebc-c902-460f-bd29-491d4895f7c0/routes",
        "events_url": "/v2/apps/a55cdebc-c902-460f-bd29-491d4895f7c0/events",
        "service_bindings_url": "/v2/apps/a55cdebc-c902-460f-bd29-491d4895f7c0/service_bindings",
        "route_mappings_url": "/v2/apps/a55cdebc-c902-460f-bd29-491d4895f7c0/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "01b7974d-fd51-4182-83a1-c174e3a32791",
        "url": "/v2/apps/01b7974d-fd51-4182-83a1-c174e3a32791",
        "created_at": "2014-03-18T15:20:39Z",
        "updated_at": "2015-11-24T00:28:53Z"
      },
      "entity": {
        "name": "mockServer",
        "production": false,
        "space_guid": "ca2701a0-5af8-448a-89ce-4f94bd009536",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Node.js",
        "detected_buildpack_guid": "6ce24da3-9ad2-49c5-ade4-08d765a01a0e",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "698a0336-9501-43fb-ae47-069d4c27f5bc",
        "command": "node app.js",
        "console": false,
        "debug": null,
        "staging_task_id": "01b7974d-fd51-4182-83a1-c174e3a32791",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "node app.js",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/ca2701a0-5af8-448a-89ce-4f94bd009536",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/01b7974d-fd51-4182-83a1-c174e3a32791/routes",
        "events_url": "/v2/apps/01b7974d-fd51-4182-83a1-c174e3a32791/events",
        "service_bindings_url": "/v2/apps/01b7974d-fd51-4182-83a1-c174e3a32791/service_bindings",
        "route_mappings_url": "/v2/apps/01b7974d-fd51-4182-83a1-c174e3a32791/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "cf857e20-8ae0-4081-8e26-ee5280374b2d",
        "url": "/v2/apps/cf857e20-8ae0-4081-8e26-ee5280374b2d",
        "created_at": "2014-09-04T23:30:23Z",
        "updated_at": "2015-11-24T00:28:58Z"
      },
      "entity": {
        "name": "allocations-prototype-sse-node",
        "production": false,
        "space_guid": "4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Node.js",
        "detected_buildpack_guid": "6ce24da3-9ad2-49c5-ade4-08d765a01a0e",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "3499207e-f976-4bd3-959d-442383d9932e",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "cf857e20-8ae0-4081-8e26-ee5280374b2d",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "node app.js",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/cf857e20-8ae0-4081-8e26-ee5280374b2d/routes",
        "events_url": "/v2/apps/cf857e20-8ae0-4081-8e26-ee5280374b2d/events",
        "service_bindings_url": "/v2/apps/cf857e20-8ae0-4081-8e26-ee5280374b2d/service_bindings",
        "route_mappings_url": "/v2/apps/cf857e20-8ae0-4081-8e26-ee5280374b2d/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "a0100178-14ee-4dd2-ab12-ba28e46ca5d7",
        "url": "/v2/apps/a0100178-14ee-4dd2-ab12-ba28e46ca5d7",
        "created_at": "2014-05-05T00:29:07Z",
        "updated_at": "2015-11-24T00:29:13Z"
      },
      "entity": {
        "name": "anima",
        "production": false,
        "space_guid": "f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "0d3f1c1e-e717-43cb-9f78-9680134897e0",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "a0100178-14ee-4dd2-ab12-ba28e46ca5d7",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/a0100178-14ee-4dd2-ab12-ba28e46ca5d7/routes",
        "events_url": "/v2/apps/a0100178-14ee-4dd2-ab12-ba28e46ca5d7/events",
        "service_bindings_url": "/v2/apps/a0100178-14ee-4dd2-ab12-ba28e46ca5d7/service_bindings",
        "route_mappings_url": "/v2/apps/a0100178-14ee-4dd2-ab12-ba28e46ca5d7/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "4e1547c8-51ba-4987-a00a-0463b463401f",
        "url": "/v2/apps/4e1547c8-51ba-4987-a00a-0463b463401f",
        "created_at": "2014-05-01T18:05:07Z",
        "updated_at": "2015-11-24T00:29:17Z"
      },
      "entity": {
        "name": "mobile-wallet",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "DATABASE_URL": "sqlite3://foobar",
          "SECRET_KEY_BASE": "7381344459e62bef99a08f2f13be4cb705687d48067a63b11dbd08db094607bdd981b96f840bb8f29dea2714c490410a3fc64a535325ba995b2c7710f2f9a4fc"
        },
        "memory": 256,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "82b88177-8833-40a7-946d-c87de73b6404",
        "command": "bundle exec rails s -p $PORT -e development -h",
        "console": true,
        "debug": null,
        "staging_task_id": "4e1547c8-51ba-4987-a00a-0463b463401f",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rails s -p $PORT -e development -h",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/4e1547c8-51ba-4987-a00a-0463b463401f/routes",
        "events_url": "/v2/apps/4e1547c8-51ba-4987-a00a-0463b463401f/events",
        "service_bindings_url": "/v2/apps/4e1547c8-51ba-4987-a00a-0463b463401f/service_bindings",
        "route_mappings_url": "/v2/apps/4e1547c8-51ba-4987-a00a-0463b463401f/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "5aa0fa90-c90d-43f3-944f-916546e4cf58",
        "url": "/v2/apps/5aa0fa90-c90d-43f3-944f-916546e4cf58",
        "created_at": "2014-05-01T18:56:55Z",
        "updated_at": "2015-11-24T00:29:18Z"
      },
      "entity": {
        "name": "qrcode",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "DATABASE_URL": "sqlite3://foobar"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "cc673265-c945-4f1e-8ca3-e298bae5e501",
        "command": "rails s -p $PORT -e development",
        "console": false,
        "debug": null,
        "staging_task_id": "5aa0fa90-c90d-43f3-944f-916546e4cf58",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "rails s -p $PORT -e development",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/5aa0fa90-c90d-43f3-944f-916546e4cf58/routes",
        "events_url": "/v2/apps/5aa0fa90-c90d-43f3-944f-916546e4cf58/events",
        "service_bindings_url": "/v2/apps/5aa0fa90-c90d-43f3-944f-916546e4cf58/service_bindings",
        "route_mappings_url": "/v2/apps/5aa0fa90-c90d-43f3-944f-916546e4cf58/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "03a9f294-9c39-42ae-8700-71e170800ca7",
        "url": "/v2/apps/03a9f294-9c39-42ae-8700-71e170800ca7",
        "created_at": "2014-05-01T23:39:01Z",
        "updated_at": "2015-11-24T00:29:20Z"
      },
      "entity": {
        "name": "testapp",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": null,
        "detected_buildpack_guid": null,
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "6eb38c58-d731-4827-af49-d7f6e6035b5c",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": null,
        "package_state": "PENDING",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": null,
        "detected_start_command": "",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/03a9f294-9c39-42ae-8700-71e170800ca7/routes",
        "events_url": "/v2/apps/03a9f294-9c39-42ae-8700-71e170800ca7/events",
        "service_bindings_url": "/v2/apps/03a9f294-9c39-42ae-8700-71e170800ca7/service_bindings",
        "route_mappings_url": "/v2/apps/03a9f294-9c39-42ae-8700-71e170800ca7/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "3758360b-0657-4a11-a4ce-bb9bf490cdf1",
        "url": "/v2/apps/3758360b-0657-4a11-a4ce-bb9bf490cdf1",
        "created_at": "2014-05-01T23:39:10Z",
        "updated_at": "2015-11-24T00:29:20Z"
      },
      "entity": {
        "name": "testapp2",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": null,
        "detected_buildpack_guid": null,
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "379b0a75-e9d8-4b9c-a034-d16a0a9b5ef7",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": null,
        "package_state": "PENDING",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": null,
        "detected_start_command": "",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/3758360b-0657-4a11-a4ce-bb9bf490cdf1/routes",
        "events_url": "/v2/apps/3758360b-0657-4a11-a4ce-bb9bf490cdf1/events",
        "service_bindings_url": "/v2/apps/3758360b-0657-4a11-a4ce-bb9bf490cdf1/service_bindings",
        "route_mappings_url": "/v2/apps/3758360b-0657-4a11-a4ce-bb9bf490cdf1/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "1112b91c-dc11-423a-8098-5d0932f97caa",
        "url": "/v2/apps/1112b91c-dc11-423a-8098-5d0932f97caa",
        "created_at": "2014-05-01T23:48:20Z",
        "updated_at": "2015-11-24T00:30:01Z"
      },
      "entity": {
        "name": "qrcodetest",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby/Rails",
        "detected_buildpack_guid": null,
        "environment_json": {
          "DATABASE_URL": "sqlite:///foobar"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "a29068b1-53d7-4a45-b8a3-3c88650b3507",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "1112b91c-dc11-423a-8098-5d0932f97caa",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/1112b91c-dc11-423a-8098-5d0932f97caa/routes",
        "events_url": "/v2/apps/1112b91c-dc11-423a-8098-5d0932f97caa/events",
        "service_bindings_url": "/v2/apps/1112b91c-dc11-423a-8098-5d0932f97caa/service_bindings",
        "route_mappings_url": "/v2/apps/1112b91c-dc11-423a-8098-5d0932f97caa/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "a58ca5ec-8348-404a-baa9-e1a10e43e3b3",
        "url": "/v2/apps/a58ca5ec-8348-404a-baa9-e1a10e43e3b3",
        "created_at": "2014-05-02T19:39:37Z",
        "updated_at": "2015-11-24T00:29:20Z"
      },
      "entity": {
        "name": "usability",
        "production": false,
        "space_guid": "28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "0dc7a997-7fd1-4295-8677-ccaf1bea8775",
        "command": null,
        "console": true,
        "debug": null,
        "staging_task_id": "a58ca5ec-8348-404a-baa9-e1a10e43e3b3",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/28e18b02-0cc6-4122-a29c-f8bc44fca872",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/a58ca5ec-8348-404a-baa9-e1a10e43e3b3/routes",
        "events_url": "/v2/apps/a58ca5ec-8348-404a-baa9-e1a10e43e3b3/events",
        "service_bindings_url": "/v2/apps/a58ca5ec-8348-404a-baa9-e1a10e43e3b3/service_bindings",
        "route_mappings_url": "/v2/apps/a58ca5ec-8348-404a-baa9-e1a10e43e3b3/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "605324ab-e8c0-4b57-88b6-10f15bbe2df3",
        "url": "/v2/apps/605324ab-e8c0-4b57-88b6-10f15bbe2df3",
        "created_at": "2014-05-07T19:37:47Z",
        "updated_at": "2015-11-24T00:29:23Z"
      },
      "entity": {
        "name": "toronto-tdd-dashboard",
        "production": false,
        "space_guid": "18f2404b-d26d-4cc8-a58c-0fbe4d4257ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "GOOGLE_CLIENT_ID": "981851393441-lmeef3nofaq467ufcjas2rl5osu2a5cd.apps.googleusercontent.com",
          "GOOGLE_CLIENT_SECRET": "-6iA7giaXMj1OxYHaWFd-6fH"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "c7ee6e2d-5f49-4315-a4ef-653c5f596fba",
        "command": "bundle exec rake db:migrate && bundle exec rake db:seed && bundle exec rails s -p $PORT",
        "console": false,
        "debug": null,
        "staging_task_id": "605324ab-e8c0-4b57-88b6-10f15bbe2df3",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rake db:migrate && bundle exec rake db:seed && bundle exec rails s -p $PORT",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/18f2404b-d26d-4cc8-a58c-0fbe4d4257ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/605324ab-e8c0-4b57-88b6-10f15bbe2df3/routes",
        "events_url": "/v2/apps/605324ab-e8c0-4b57-88b6-10f15bbe2df3/events",
        "service_bindings_url": "/v2/apps/605324ab-e8c0-4b57-88b6-10f15bbe2df3/service_bindings",
        "route_mappings_url": "/v2/apps/605324ab-e8c0-4b57-88b6-10f15bbe2df3/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "587e70bc-a8c4-4ebe-ac21-42da001f8a77",
        "url": "/v2/apps/587e70bc-a8c4-4ebe-ac21-42da001f8a77",
        "created_at": "2015-01-22T20:20:48Z",
        "updated_at": "2016-08-12T21:36:56Z"
      },
      "entity": {
        "name": "cannedair-production-clock",
        "production": false,
        "space_guid": "e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/ruby-buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {
          "CACHER_ENVIRONMENT": "production",
          "CACHER_PASSWORD": "prawn2saint",
          "CACHER_USERNAME": "augur_api",
          "GIT_SHA": "81e753104bf7e7162bc88e8d34c05ccdb6f79afc",
          "NEW_RELIC_APP_NAME": "cannedair-production",
          "NEW_RELIC_LICENSE_KEY": "3ec5c68149f455ff327d13182b349678eec658ec",
          "OPENAIR_ENVIRONMENT": "production",
          "OPENAIR_FETCH_RECORDS_LIMIT": "1000",
          "OPENAIR_PRODUCTION_COMPANY": "Pivotal",
          "OPENAIR_PRODUCTION_KEY": "G2o5Ww6zzjXocB9M26cw",
          "OPENAIR_PRODUCTION_URL": "https://www.openair.com",
          "OPENAIR_SANDBOX_COMPANY": "Pivotal IAD",
          "OPENAIR_SANDBOX_KEY": "ljv7gySstdywGYwzslrM",
          "OPENAIR_SANDBOX_URL": "https://sandbox.openair.com",
          "XML_CLIENT": "RW Android"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "abf42333-f92c-4689-ac84-ad3570ef5328",
        "command": "bundle exec clockwork lib/clock.rb",
        "console": false,
        "debug": null,
        "staging_task_id": "587e70bc-a8c4-4ebe-ac21-42da001f8a77",
        "package_state": "STAGED",
        "health_check_type": "none",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bin/rails server -p $PORT -e $RAILS_ENV",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/e69a6715-68b6-4157-9815-7e286a66c7ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/587e70bc-a8c4-4ebe-ac21-42da001f8a77/routes",
        "events_url": "/v2/apps/587e70bc-a8c4-4ebe-ac21-42da001f8a77/events",
        "service_bindings_url": "/v2/apps/587e70bc-a8c4-4ebe-ac21-42da001f8a77/service_bindings",
        "route_mappings_url": "/v2/apps/587e70bc-a8c4-4ebe-ac21-42da001f8a77/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "59aff787-e56a-41f0-be90-c309f7502db3",
        "url": "/v2/apps/59aff787-e56a-41f0-be90-c309f7502db3",
        "created_at": "2015-01-21T07:26:27Z",
        "updated_at": "2016-04-27T19:01:28Z"
      },
      "entity": {
        "name": "allocations-prototype",
        "production": false,
        "space_guid": "4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "Ruby",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "DATABASE_URL": "postgres://sbqkxgpf:l56ULlLQqalROG2Y57HoagIfpR3tUdj7@babar.elephantsql.com:5432/sbqkxgpf",
          "EVENT_SERVER_URL": "https://allocations-prototype-sse-node.cfapps.io"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "9c05ff94-c5d6-4eea-a796-07ebfba16e35",
        "command": "bundle exec rake db:migrate && bundle exec rails s -p $PORT",
        "console": false,
        "debug": null,
        "staging_task_id": "59aff787-e56a-41f0-be90-c309f7502db3",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": 180,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rake db:migrate && bundle exec rails s -p $PORT",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/59aff787-e56a-41f0-be90-c309f7502db3/routes",
        "events_url": "/v2/apps/59aff787-e56a-41f0-be90-c309f7502db3/events",
        "service_bindings_url": "/v2/apps/59aff787-e56a-41f0-be90-c309f7502db3/service_bindings",
        "route_mappings_url": "/v2/apps/59aff787-e56a-41f0-be90-c309f7502db3/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "2b7f84b0-54a5-4a88-a635-318caca50e44",
        "url": "/v2/apps/2b7f84b0-54a5-4a88-a635-318caca50e44",
        "created_at": "2015-01-25T19:13:50Z",
        "updated_at": "2016-01-25T07:41:01Z"
      },
      "entity": {
        "name": "allocations-prototype-mongodb",
        "production": false,
        "space_guid": "4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "ruby_buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "d11e1aa0-c7b2-48d4-881b-fa8718ef02eb",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "2b7f84b0-54a5-4a88-a635-318caca50e44",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rails server -p $PORT",
        "enable_ssh": false,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/4a529c23-bbad-491d-92a7-3bda7d716570",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/2b7f84b0-54a5-4a88-a635-318caca50e44/routes",
        "events_url": "/v2/apps/2b7f84b0-54a5-4a88-a635-318caca50e44/events",
        "service_bindings_url": "/v2/apps/2b7f84b0-54a5-4a88-a635-318caca50e44/service_bindings",
        "route_mappings_url": "/v2/apps/2b7f84b0-54a5-4a88-a635-318caca50e44/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "c94c512f-064c-415e-8bce-8af66d23b81c",
        "url": "/v2/apps/c94c512f-064c-415e-8bce-8af66d23b81c",
        "created_at": "2015-06-08T16:29:33Z",
        "updated_at": "2015-11-30T18:17:00Z"
      },
      "entity": {
        "name": "pivotal-life-staging",
        "production": false,
        "space_guid": "18f2404b-d26d-4cc8-a58c-0fbe4d4257ad",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": null,
        "detected_buildpack_guid": null,
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "bd6d842b-7222-4842-8403-6f1dee5f18e4",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": null,
        "package_state": "PENDING",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": null,
        "detected_start_command": "",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/18f2404b-d26d-4cc8-a58c-0fbe4d4257ad",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/c94c512f-064c-415e-8bce-8af66d23b81c/routes",
        "events_url": "/v2/apps/c94c512f-064c-415e-8bce-8af66d23b81c/events",
        "service_bindings_url": "/v2/apps/c94c512f-064c-415e-8bce-8af66d23b81c/service_bindings",
        "route_mappings_url": "/v2/apps/c94c512f-064c-415e-8bce-8af66d23b81c/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "c7192c6c-8b8d-4c62-a39e-30e6855534e6",
        "url": "/v2/apps/c7192c6c-8b8d-4c62-a39e-30e6855534e6",
        "created_at": "2015-06-29T18:22:38Z",
        "updated_at": "2015-11-30T18:18:25Z"
      },
      "entity": {
        "name": "pivot-texts",
        "production": false,
        "space_guid": "b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "java-buildpack=v3.3.1-https://github.com/cloudfoundry/java-buildpack.git#063836b java-main new-relic-agent=3.22.1 open-jdk-like-jre=1.8.0_65 open-jdk-like-memory-calculator=2.0.1_RELEASE spring-auto-reconfiguration=1.10.0_RELEASE",
        "detected_buildpack_guid": "e000b78c-c898-419e-843c-2fd64175527e",
        "environment_json": {
          "PIVOTS_AUTHTOKEN": "q2jGynbi1TNYyTp3nSRy",
          "PIVOTS_EMAIL": "accounts+pivotal-life@pivotallabs.com",
          "PIVOTS_URL": "https://pivots.pivotallabs.com/api/users.json",
          "SECURITY_USER_NAME": "G99sGUnamHJTKCOywhZXEYTkryg20Vre",
          "SECURITY_USER_PASSWORD": "ltqWXtLtjm9ACrmEpk0Pe1OgXflny6SB"
        },
        "memory": 512,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "c9f4c314-4650-40dc-a626-3a6745dc2a5f",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "c7192c6c-8b8d-4c62-a39e-30e6855534e6",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.1_RELEASE -memorySizes=metaspace:64m.. -memoryWeights=heap:75,metaspace:10,native:10,stack:5 -memoryInitials=heap:100%,metaspace:100% -totMemory=$MEMORY_LIMIT) && SERVER_PORT=$PORT $PWD/.java-buildpack/open_jdk_jre/bin/java -cp $PWD/.:$PWD/.java-buildpack/spring_auto_reconfiguration/spring_auto_reconfiguration-1.10.0_RELEASE.jar -Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY -Dnewrelic.config.log_file_name=STDOUT -Dnewrelic.config.license_key=5a122849d069442010ab4ea28a6bac7d006ff8e7 -Dnewrelic.config.app_name=pivot-texts -Dnewrelic.config.licenseKey=5a122849d069442010ab4ea28a6bac7d006ff8e7 -javaagent:$PWD/.java-buildpack/new_relic_agent/new_relic_agent-3.22.1.jar -Dnewrelic.home=$PWD/.java-buildpack/new_relic_agent -Dnewrelic.enable.java.8=true org.springframework.boot.loader.JarLauncher",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/c7192c6c-8b8d-4c62-a39e-30e6855534e6/routes",
        "events_url": "/v2/apps/c7192c6c-8b8d-4c62-a39e-30e6855534e6/events",
        "service_bindings_url": "/v2/apps/c7192c6c-8b8d-4c62-a39e-30e6855534e6/service_bindings",
        "route_mappings_url": "/v2/apps/c7192c6c-8b8d-4c62-a39e-30e6855534e6/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "c3a91c34-016e-4d6c-b76d-df2443e31a8e",
        "url": "/v2/apps/c3a91c34-016e-4d6c-b76d-df2443e31a8e",
        "created_at": "2015-06-29T18:54:56Z",
        "updated_at": "2017-03-02T17:14:39Z"
      },
      "entity": {
        "name": "pivotal-life-staging",
        "production": false,
        "space_guid": "b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "ruby 1.6.34",
        "detected_buildpack_guid": "955d2f3d-5da9-4a16-a594-db1ba27b9113",
        "environment_json": {
          "AUTH_PASSWORD": "ZAuKchUQQk",
          "AUTH_USERNAME": "pivotal",
          "FORECAST_API_KEY": "d6f63a82d1a54453e0ad7f90ee868c17",
          "GOOGLE_CLIENT_ID": "448417189650-a8bvuoiml1cnj77ceoatupf252i9vm4l.apps.googleusercontent.com",
          "GOOGLE_CLIENT_SECRET": "mRBge_5QoeeV7zF9kJl21DA-",
          "GOOGLE_REFRESH_TOKEN": "1/fwaeZ4B3o9nhUoYEYMQ32e4mTNH_GyAo_4W5PrB4olx90RDknAdJa_sgfheVM0XT",
          "GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL": "serviceaccount@eventslistcal.iam.gserviceaccount.com",
          "GOOGLE_SERVICE_ACCOUNT_CLIENT_ID": "103841605545276687347",
          "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCi58Gu0ke2P2GI\\nWtXKrZX3juyRniYvj9gVNbMrHBIYx5WfLgR0Lxc1WVQ7YrmCw/zYlnbuAN4sdQRX\\n3/snFsEdGItHArbePeTyZusPM6v50pZ1cpaJ030DS1ytTeoSlC7eTJYqx3Rle0O/\\nRfvU0ydc8x1DFiVCRgG8WfZ1VxJ6ryh72tnZD/nYnyfFMRXFOTK1VMPTArRZWstF\\nvTQbY4fgAwNPoATvcACVed/tNiiHD8vF/WuHMMTP/YTAXhdAO+SIlmcTWHS27+gs\\n5w4l21CEp2rKcBAdwOOwwsIA50wb0jWpA2O1f10Hrvd44/iInCUvu6zvHekb0FIJ\\nNwN+Go15AgMBAAECggEAN6y5NwRK2fBjZvSUaIZW4JqKI2JHbq3cjbMinrMjRDDB\\n4/sYLpUBe4wiC4G8IQLWYTdbQhAt3kfHyjiUX1GZglYnE4fL87x3iJi/8RwZxHHC\\nVjVpWYVcDkotTFV6kArw0ayfDdPI5f3ws2g5nwzjQRMdhxYEedfvM+4TGxs9B4xU\\ncMLSkgSKwxVR0iBAR5M7gfZAmSyd/zNiZ03xFuMb4+54+aWmnmmRourMvUYY0jge\\nMq56O/K8fdEcy+Lrgo1pi74jdCgS20NwLagO98vaE25TdLQqNgwwaxphAo7hkPAg\\nIQl+E6F/K2N4ZwNoW6UXVLvvaIcZGQ91g+3N5iCZYQKBgQDrK5Hbct1TVPILswqa\\nRuwcP1mXsdBhZ67RxQAE9IWfAFuagE+fIrRDrxvveoTJyIL/p0FxttIUVfs1G/6/\\ntIcyTMiSFhFzEdveTFkdRmBE3n0BJCSewQp8jTz4uAbTW28O0oX38vdc7znnJz1f\\niXO0f7uRpVVlOtanTNO3qhXtrQKBgQCxVZjNhESQKZB6yGfgvRnTN+X5u1J5Nl7l\\n4b/arXt4GO9WPy4Dr/lvLE+iIbF138yjZhHwUpCQJbtTiiIhyXX4MT8ndkDqD83v\\nk5uUqSKPHtWvuV0UZDSr8/dlJpbdGvtWAYPmdISKG/KKSj8fDcVy4kyLy7tgGjVS\\npMJemKuAfQKBgCQGBY6/FqYoMfeW0n31dT+SeK/i/g+dqUrayXj41+sWS/Hry8aN\\ns11W2omhk+uw+lgdD8pSffW9ggCNrEVDax5KYsL1/HBLAQoZWeFBIYgLKMze83ka\\nCvgvTnKvBeSkceusVfc4Uan7vzvoZ99Vl9LDakESOXWLQMxZ2Wid9kP1AoGBAIpg\\nxO/6OpZUGM32/Dg+15wejnKlXeIAL2UrF87IeQRqULj4bCuscfPym+FkcVoN3V3U\\nFEN36h7Rkq/JpoC++DNIGoPsnxMGaih9Anaq1LDh2tVYy+1RlFhp868Wwbqfh2jB\\nne+DFLnAvS50aXUOBflz5U9hF0ISsXFf59xxPcLxAoGAQfLQ4gNAwn3UMfddFJcF\\nlKP4INbUUZaiMFB/XoW0oc5+MvJDDR7Q8qGfEurkUjSmdnW6sKNKbTOTc4GoluBA\\nBdy/5ZLAOwRgP1SsBaPOs9wg61oRz9TAikgHVQt5iaM4S3atQGqsCACWKOrN2CoH\\nO1jcao2hB9RA9Us+/xDM/nE=\\n-----END PRIVATE KEY-----\\n",
          "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID": "bfbc77e39aacb7e5ed1203aa3d7a35792e553667",
          "GOOGLE_SERVICE_ACCOUNT_TYPE": "service_account",
          "MOVEMBER_TEAM_IDS": "[1712277,1712209,1712237,1637385,1727569,1912725,1858657]",
          "PIVOTS_AUTH_TOKEN": "q2jGynbi1TNYyTp3nSRy",
          "PIVOTS_EMAIL": "accounts+pivotal-life@pivotallabs.com",
          "PIVOTS_TEXTS_BASIC_PASSWORD": "ltqWXtLtjm9ACrmEpk0Pe1OgXflny6SB",
          "PIVOTS_TEXTS_BASIC_USERNAME": "G99sGUnamHJTKCOywhZXEYTkryg20Vre",
          "PIVOTS_TEXTS_PHONE_NUMBER": "508 758 0124",
          "PIVOTS_TEXTS_URL": "https://rrged2zgsgtzqfmq.cfapps.io/pivot-texts/today",
          "SF511_AUTH_TOKEN": "85ba60c5-3fcd-49c1-9616-241f0a54f6cb",
          "TOMTOM_API_KEY": "njd7pjfvt4axhbsf5uwz6vp7",
          "TWITTER_CONSUMER_KEY": "TNWq8PDymfeAbToeAKCOjTKh0",
          "TWITTER_CONSUMER_SECRET": "i8bOL58rKN6jSZ40mrIyQ1ZmfQUhtaba0p5T9zxwI4C3Cq72mL",
          "TWITTER_OAUTH_SECRET": "SPtNTSzElp2Opz1IvbTadnsdD04I7fuOxa2yMhdwRKYHd",
          "TWITTER_OAUTH_TOKEN": "4816869077-rEHOJ1YUbtZCd4kE750QboDn3pkRxskri9pQlxm",
          "TWITTER_PICTURE_HASHTAG": "PivotalLife",
          "YELP_AUTH_SECRET": "I5NVv_aocuDVJui3cxLaYfcTy7w",
          "YELP_AUTH_TOKEN": "9i4Rok3oTe8uEAVTYEVqSCy5O83cJzyP",
          "YELP_CONSUMER_KEY": "UEaEPHSvPkfODc4Ke6pCXQ",
          "YELP_CONSUMER_SECRET": "EyXaWqRhNUnmDjzhCuIka64bAVw"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "46b6852a-9939-4159-8a86-9729d52f95c6",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "a30fedc6-4bbd-48db-870d-ac0d7b7ca00b",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2017-03-02T17:14:33Z",
        "detected_start_command": "bundle exec thin start -R config.ru -e $RACK_ENV -p $PORT",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/b8f578df-43cc-4c42-971f-d156cb69142c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/c3a91c34-016e-4d6c-b76d-df2443e31a8e/routes",
        "events_url": "/v2/apps/c3a91c34-016e-4d6c-b76d-df2443e31a8e/events",
        "service_bindings_url": "/v2/apps/c3a91c34-016e-4d6c-b76d-df2443e31a8e/service_bindings",
        "route_mappings_url": "/v2/apps/c3a91c34-016e-4d6c-b76d-df2443e31a8e/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "e441aa62-31d0-4fac-9577-dadf2025ccd3",
        "url": "/v2/apps/e441aa62-31d0-4fac-9577-dadf2025ccd3",
        "created_at": "2016-04-21T00:14:10Z",
        "updated_at": "2016-04-21T22:59:02Z"
      },
      "entity": {
        "name": "eureka-server",
        "production": false,
        "space_guid": "f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "java-buildpack=v3.7-offline-https://github.com/cloudfoundry/java-buildpack.git#b07524d java-main open-jdk-like-jre=1.8.0_91 open-jdk-like-memory-calculator=2.0.2_RELEASE spring-auto-reconfiguration=1.10.0_RELEASE",
        "detected_buildpack_guid": "e000b78c-c898-419e-843c-2fd64175527e",
        "environment_json": {},
        "memory": 512,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "0b9606f0-6de3-4a09-98da-63443f3532bf",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "e441aa62-31d0-4fac-9577-dadf2025ccd3",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.2_RELEASE -memorySizes=metaspace:64m.. -memoryWeights=heap:75,metaspace:10,native:10,stack:5 -memoryInitials=heap:100%,metaspace:100% -totMemory=$MEMORY_LIMIT) && JAVA_OPTS=\"-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY\" && SERVER_PORT=$PORT eval exec $PWD/.java-buildpack/open_jdk_jre/bin/java $JAVA_OPTS -cp $PWD/. org.springframework.boot.loader.JarLauncher",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/e441aa62-31d0-4fac-9577-dadf2025ccd3/routes",
        "events_url": "/v2/apps/e441aa62-31d0-4fac-9577-dadf2025ccd3/events",
        "service_bindings_url": "/v2/apps/e441aa62-31d0-4fac-9577-dadf2025ccd3/service_bindings",
        "route_mappings_url": "/v2/apps/e441aa62-31d0-4fac-9577-dadf2025ccd3/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "22e09ca7-ea1f-4501-b49c-5215c9183296",
        "url": "/v2/apps/22e09ca7-ea1f-4501-b49c-5215c9183296",
        "created_at": "2016-04-21T00:22:23Z",
        "updated_at": "2016-04-21T23:05:54Z"
      },
      "entity": {
        "name": "discoverable-service",
        "production": false,
        "space_guid": "f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "java-buildpack=v3.7-offline-https://github.com/cloudfoundry/java-buildpack.git#b07524d java-main open-jdk-like-jre=1.8.0_91 open-jdk-like-memory-calculator=2.0.2_RELEASE spring-auto-reconfiguration=1.10.0_RELEASE",
        "detected_buildpack_guid": "e000b78c-c898-419e-843c-2fd64175527e",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "4bbed865-dbfc-4e3f-9e2f-8ce84767930f",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "22e09ca7-ea1f-4501-b49c-5215c9183296",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.2_RELEASE -memorySizes=metaspace:64m.. -memoryWeights=heap:75,metaspace:10,native:10,stack:5 -memoryInitials=heap:100%,metaspace:100% -totMemory=$MEMORY_LIMIT) && JAVA_OPTS=\"-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY\" && SERVER_PORT=$PORT eval exec $PWD/.java-buildpack/open_jdk_jre/bin/java $JAVA_OPTS -cp $PWD/. org.springframework.boot.loader.JarLauncher",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/f60e2c16-bcf3-42a3-b339-742fa2dda09c",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/22e09ca7-ea1f-4501-b49c-5215c9183296/routes",
        "events_url": "/v2/apps/22e09ca7-ea1f-4501-b49c-5215c9183296/events",
        "service_bindings_url": "/v2/apps/22e09ca7-ea1f-4501-b49c-5215c9183296/service_bindings",
        "route_mappings_url": "/v2/apps/22e09ca7-ea1f-4501-b49c-5215c9183296/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "d6d4a8d8-a309-46e5-8001-adb3e553043f",
        "url": "/v2/apps/d6d4a8d8-a309-46e5-8001-adb3e553043f",
        "created_at": "2016-05-27T00:01:40Z",
        "updated_at": "2017-03-01T01:34:41Z"
      },
      "entity": {
        "name": "kennect-staging",
        "production": false,
        "space_guid": "853c7a21-a01a-4833-884c-0f32ba406b35",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "java_buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": "e000b78c-c898-419e-843c-2fd64175527e",
        "environment_json": {
          "ATS_BASE_URL": "https://integration.talentwise.com",
          "ATS_SERVICE_URL": "https://integration.talentwise.com/kennectapi/ats-asynch-entry.php",
          "AUTH_PASSWORD": "e6ff30ca-2414-45c2-89fa-f656324cbd1b",
          "AUTH_URL": "https://auth.int.sterlingbackcheck.com/v1/tokens/authenticate",
          "AUTH_USERNAME": "kennect.int@api.sterlingbackcheck.com",
          "BACKEND_API_AUTH_KEY": "K8WYfBMsrU",
          "BACKEND_API_CLIENT_ID": "20476",
          "BACKEND_API_URL": "https://integration.talentwise.com/kennectapi/ats-asynch-entry.php",
          "BLOBS_API_KEY": "4f480090-9cfe-4c87-9f38-31e8f8fa469d",
          "BLOBS_URL": "https://blobs.int.sterlingbackcheck.com/v1/blobs",
          "DOCS_URL": " https://kennect.cfapps.io/docs",
          "GROMIT_SERVICE_URL": "https://apps.integration.talentwise.com/pubapi",
          "LOGGING_LEVEL": "DEBUG",
          "MVR_ENABLED": "true",
          "REPORT_URL": "https://integration.talentwise.com",
          "TICKET_SERVICE_URL": "https://tickets.int.sterlingbackcheck.com/v1/tickets",
          "TW_BASIC_AUTH_TOKEN": "dXNlcjpwd2Q=",
          "URL": " https://kennect.cfapps.io"
        },
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "4c9a3b50-e18c-4106-aa54-5c6462d72f2b",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "f6bda1cb-a5f3-42d4-a48f-dd04cc18b959",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-27T23:26:46Z",
        "detected_start_command": "CALCULATED_MEMORY=$($PWD/.java-buildpack/open_jdk_jre/bin/java-buildpack-memory-calculator-2.0.2_RELEASE -memorySizes=metaspace:64m..,stack:228k.. -memoryWeights=heap:65,metaspace:10,native:15,stack:10 -memoryInitials=heap:100%,metaspace:100% -stackThreads=300 -totMemory=$MEMORY_LIMIT) && JAVA_OPTS=\"-Djava.io.tmpdir=$TMPDIR -XX:OnOutOfMemoryError=$PWD/.java-buildpack/open_jdk_jre/bin/killjava.sh $CALCULATED_MEMORY\" && SERVER_PORT=$PORT eval exec $PWD/.java-buildpack/open_jdk_jre/bin/java $JAVA_OPTS -cp $PWD/. org.springframework.boot.loader.WarLauncher",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/853c7a21-a01a-4833-884c-0f32ba406b35",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/d6d4a8d8-a309-46e5-8001-adb3e553043f/routes",
        "events_url": "/v2/apps/d6d4a8d8-a309-46e5-8001-adb3e553043f/events",
        "service_bindings_url": "/v2/apps/d6d4a8d8-a309-46e5-8001-adb3e553043f/service_bindings",
        "route_mappings_url": "/v2/apps/d6d4a8d8-a309-46e5-8001-adb3e553043f/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "465af677-9a95-4b0e-8fff-b66f4d96dfe1",
        "url": "/v2/apps/465af677-9a95-4b0e-8fff-b66f4d96dfe1",
        "created_at": "2016-06-16T23:12:05Z",
        "updated_at": "2016-07-28T19:06:29Z"
      },
      "entity": {
        "name": "kennect-docs",
        "production": false,
        "space_guid": "853c7a21-a01a-4833-884c-0f32ba406b35",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": "https://github.com/cloudfoundry/ruby-buildpack",
        "detected_buildpack": "",
        "detected_buildpack_guid": null,
        "environment_json": {},
        "memory": 512,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STOPPED",
        "version": "5cf29f03-0bb8-4754-bf48-f9041ccd7488",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "465af677-9a95-4b0e-8fff-b66f4d96dfe1",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": 60,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-10-10T03:55:53Z",
        "detected_start_command": "bundle exec rackup config.ru -p $PORT",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/853c7a21-a01a-4833-884c-0f32ba406b35",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/465af677-9a95-4b0e-8fff-b66f4d96dfe1/routes",
        "events_url": "/v2/apps/465af677-9a95-4b0e-8fff-b66f4d96dfe1/events",
        "service_bindings_url": "/v2/apps/465af677-9a95-4b0e-8fff-b66f4d96dfe1/service_bindings",
        "route_mappings_url": "/v2/apps/465af677-9a95-4b0e-8fff-b66f4d96dfe1/route_mappings"
      }
    },
    {
      "metadata": {
        "guid": "e21b0bba-f3dd-4c8c-af64-58002b8336ba",
        "url": "/v2/apps/e21b0bba-f3dd-4c8c-af64-58002b8336ba",
        "created_at": "2016-11-14T17:28:32Z",
        "updated_at": "2016-11-15T22:54:38Z"
      },
      "entity": {
        "name": "godzilla-test-ui",
        "production": false,
        "space_guid": "82f6fa8d-6fc8-4fe1-915e-8221aa636496",
        "stack_guid": "86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "buildpack": null,
        "detected_buildpack": "node.js 1.5.22",
        "detected_buildpack_guid": "6ce24da3-9ad2-49c5-ade4-08d765a01a0e",
        "environment_json": {},
        "memory": 1024,
        "instances": 1,
        "disk_quota": 1024,
        "state": "STARTED",
        "version": "e5e0c65c-b0a3-4227-ae42-0796472d0e16",
        "command": null,
        "console": false,
        "debug": null,
        "staging_task_id": "42674e3f-ce9b-43d1-a985-77302d5b562a",
        "package_state": "STAGED",
        "health_check_type": "port",
        "health_check_timeout": null,
        "health_check_http_endpoint": null,
        "staging_failed_reason": null,
        "staging_failed_description": null,
        "diego": true,
        "docker_image": null,
        "package_updated_at": "2016-11-15T22:54:03Z",
        "detected_start_command": "npm start",
        "enable_ssh": true,
        "docker_credentials_json": {
          "redacted_message": "[PRIVATE DATA HIDDEN]"
        },
        "ports": [
          8080
        ],
        "space_url": "/v2/spaces/82f6fa8d-6fc8-4fe1-915e-8221aa636496",
        "stack_url": "/v2/stacks/86205f38-84fc-4bc2-b2b8-af7f55669f04",
        "routes_url": "/v2/apps/e21b0bba-f3dd-4c8c-af64-58002b8336ba/routes",
        "events_url": "/v2/apps/e21b0bba-f3dd-4c8c-af64-58002b8336ba/events",
        "service_bindings_url": "/v2/apps/e21b0bba-f3dd-4c8c-af64-58002b8336ba/service_bindings",
        "route_mappings_url": "/v2/apps/e21b0bba-f3dd-4c8c-af64-58002b8336ba/route_mappings"
      }
    }
  ]
};

function App() {
  console.log(apps);
  return (
    <div className="App">
      <header className="App-header">pivotallabs</header>
      <section className="spaces">
        {[]}
      </section>
      <header>sterling</header>
      <section>
        <div>
          <header>Godzilla</header>
          <section></section>
        </div>
      </section>
    </div>
  );
}

export default App;
