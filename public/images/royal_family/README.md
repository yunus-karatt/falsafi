Place your royal family artwork images in this folder with the following naming convention:

- royal-01.jpg
- royal-02.jpg
- royal-03.jpg
- ...

The gallery page at `/fine-art/royal` expects images named `royal-01.jpg` through `royal-18.jpg` by default. If you have a different number of images, either rename them to this pattern or edit `src/app/fine-art/royal/page.tsx` and update the `IMAGES` array.

To copy from your Downloads folder on Windows (example):

```powershell
mkdir public\images\royal_family
Copy-Item "C:\Users\HP\Downloads\royal_family\*" public\images\royal_family\
```

After copying, run the dev server:

```bash
npm run dev
```
