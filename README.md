# TODOS
- [ ] Table cell renders
- [x] Asset logo in tables
- [x] Arete logo
- [x] Table align
- [x] Action API link
- [x] Modal for selecting asset & balance in actions
- [x] Action modal asset
- [x] Change ActionModal for vote and bribe (xATE)
- [x] Link gitbook (https://arete-finance.gitbook.io/introduction/introduction/welcome-to-arete)
- [x] Header z-index
- [x] Account selector in Connect Wallet
- [x] Action buttons in Extract ATE
- [x] Implement Epoch card
- [x] Save wallet in localStorage
- [x] Change theme

# API Status
## API Spec

|STATUS|TAB|        URI        |   Method  |      Description      |
|---|---|-------------------|-----------|-----------------------|
|:white_check_mark:|user|`/user/check?address=???`|`GET`| 주소가 유효한지 확인 (204 / 404)|
|:white_check_mark:|market|`/market/header`|`GET`|Market Header 내용|
|:white_check_mark:|market|`/market/content`|`GET`|Market Content 내용|
|:white_check_mark:|dashboard|`/dashboard/header?address=???`|`GET`|대시보드 header 정보|
|:white_check_mark:|dashboard|`/dashboard/header/supply?address=???`|`GET`|My Supplies tab 헤더 정보|
|:white_check_mark:|dashboard|`/dashboard/header/borrow?address=???`|`GET`|My Borrows tab 헤더 정보|
|:white_check_mark:|dashboard|`/dashboard/supply?address=???`|`GET`|My Supplies tab detail|
|:white_check_mark:|dashboard|`/dashboard/borrow?address=???`|`GET`|My Borrows tab detail|
|:white_check_mark:|dashboard|`/dashboard/asset/supply?address=???`|`GET`|Assets to Supply tab detail|
|:white_check_mark:|dashboard|`/dashboard/asset/borrow?address=???`|`GET`|Assets to Borrow tab detail|
|:white_check_mark:|dashboard|`/dashboard/action/supply?address=???&asset=???&balance=???`|`GET`|Supply action|
|:white_check_mark:|dashboard|`/dashboard/action/withdraw?address=???&asset=???&balance=???`|`GET`|Withdraw action|
|:white_check_mark:|dashboard|`/dashboard/action/borrow?address=???&asset=???&balance=???`|`GET`|Borrow action|
|:white_check_mark:|dashboard|`/dashboard/action/repay?address=???&asset=???&balance=???`|`GET`|Repay action|
|:white_check_mark:|ate|`/ate/header?address=???`|`GET`|xATE tab header|
|:white_check_mark:|ate|`/ate/vesting?address=???`|`GET`|contents of "Extract ATE" table|
|:white_check_mark:|ate|`/ate/action/forge?address=???&balance=???`|`GET`|Forge action|
|:white_check_mark:|ate|`/ate/action/extract?address=???&index=???`|`GET`|Extract action|
|:white_check_mark:|vote|`/vote/header?address=???`|`GET`|Vote tab header & Vote Power Used information|
|:white_check_mark:|vote|`/vote/content?address=???`|`GET`|Vote tab table content|
|:white_check_mark:|vote|`/vote/action/vote?address=???&asset=???&balance=???`|`GET`|Vote table action|
|:white_check_mark:|bribe|`/bribe/content?address=???`|`GET`|Bribe tab table Content|
|:white_check_mark:|bribe|`/bribe/action/bribe?address=???&asset=???&balance=???`|`GET`|Bribe action|