# Fintecture Kata Payment

## Install

```sh
git clone https://github.com/np42/fintecture-kata-payment

cd fintecture-kata-payment

npm install
```

## Configure

Create the SQL database based on structure:

```sh
/Payment/Payment.sql
```

Edit `cqesconfig.yml` and replace database access to your own

## Compile

Compile typescript

```sh
tsc
```

## Start service

```sh
npm run dev
```

## Create Payment

```sh
curl -X POST http://localhost:1080/Payment/Create \
     -H 'Content-Type: application/json' \
     --data '{"senderId": "b42279de-513f-4ecf-8d1f-e2b808038185", "recipientId": "17c7f0fa-7e90-4a43-b99f-dc63ceafa2bb", "amount": 0.42 }'

# returns if success { "paymentId": <UUID> }
# UUID like bd80dc9c-e009-4d7c-b6d7-1c499e3560b9
```

## Get Payment Information

```sh
curl http://localhost:1080/Payment/bd80dc9c-e009-4d7c-b6d7-1c499e3560b9

# returns { "paymentId":   "bd80dc9c-e009-4d7c-b6d7-1c499e3560b9"
#         , "senderId":    "b42279de-513f-4ecf-8d1f-e2b808038185"
#         , "recipientId": "17c7f0fa-7e90-4a43-b99f-dc63ceafa2bb"
#         , "amount":      0.42
#         }
```
