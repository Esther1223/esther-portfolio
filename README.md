# Esther Liu · Portfolio

個人作品集網站（中英雙語、淺色／深色主題），內容依履歷初始化，可部署到 GitHub Pages。

## 本機預覽

用瀏覽器直接開啟 `index.html`，或在專案目錄執行：

```bash
npx --yes serve .
```

## 放照片

1. 把照片命名為 `portrait.jpg`
2. 放到 `assets/portrait.jpg`
3. 建議直式、臉部清楚、光線自然的生活照即可（不一定要棚拍證件照）

目前沒有照片時，右側會顯示佔位區塊。

## 部署到 GitHub Pages

1. 在 GitHub 建立 repo（例如 `esther-portfolio`）
2. 推送這個專案：

```bash
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Esther1223/esther-portfolio.git
git push -u origin main
```

3. GitHub → **Settings** → **Pages**
4. Source 選 **Deploy from a branch**
5. Branch 選 `main`，資料夾選 `/ (root)` → Save

幾分鐘後可開啟：

`https://Esther1223.github.io/esther-portfolio/`

若 repo 名稱改成 `Esther1223.github.io`，網址會是 `https://Esther1223.github.io/`。

## 之後可改的地方

- `index.html` / `js/main.js`：經歷、專案、中英文字
- `css/styles.css`：配色與版面
- `assets/`：照片與其他素材
