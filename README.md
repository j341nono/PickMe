# PickMe

ルーレットを使ってランダムに1人を選出するWebアプリケーションです。

任意のユーザーを選出対象から除外するオプションも提供しています。

> セキュリティ上の理由により、研究室メンバーの名簿データは公開していません。必要な場合は、以下の手順で名簿ファイルを作成するか、開発者までご連絡ください。

---

## 使用方法

```bash
git clone git@github.com:j341nono/PickMe.git
cd PickMe
npm install
npm start
```

起動後、ブラウザで http://localhost:3000 にアクセスすると、アプリケーションが表示されます。


## 名簿ファイルの作成方法

ルーレットに登録する名前は、`src/public/data.csv` に以下の形式で記述してください：

```bash
name,grade
```

- `name`：参加者の名前  
- `grade`：同じ `grade` に属する名前は同じルーレット内でまとめて扱われます。

例：
```bash
Alice,B4
Bob,M1
Charlie,B4
```

この例では、Alice と Charlie は同じルーレットに含まれ、Bob は別のルーレットになります。

