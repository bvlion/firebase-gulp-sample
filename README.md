# firebase-gulp-sample

Firebase HostingとCloud Functionを連携してgulpで圧縮するサンプルプロジェクトです。

## 前提

 nodeがインストールされているMacを前提としています。

## 機能

以下のサンプルが含まれています。

* gulpによるJSとCSSの圧縮
    * JSはbabelを利用してES6に対応
    * 構文エラーチェック（コンソール出力）
* makeによる初期設定
* hostingのURLにfunctionsをrewrite
* FirebaseStoreによるセッション管理
* firebaseとexpressの連携

## 作成経緯

firebase serveとgulp watchを同時に動かしたくて作成しました。  
サンプルとして自由にご利用ください。

## 注意事項

以下、ご留意のうえ、ご指摘がございましたら随時PR下さい！

* 作者は特段JavascriptやFirebase、make、gulpに強いワケではございません。
    * どちらかと言うと今後また自分で何か作成する時の雛形として作りました。
* firebaseアカウントの箇所は、諸々書き換えています。
    * これだけcloneしても動きません。
    * firebaseのアカウントをご用意のうえご利用ください。

## License

MIT