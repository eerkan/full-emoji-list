# full-emoji-list

A lightweight, zero-dependency package that provides the **complete list of emojis based on the Unicode v17.0 standard**. Delivered as pure JSON, it’s designed to be fast, portable, and easy to integrate into any modern JavaScript or TypeScript project.

---

## ✨ Features

- ✅ **Up-to-date** with **Unicode v17.0**
- 📦 **Zero dependencies** — pure JSON data
- ⚡ **Lightweight & fast**
- 🔧 **Works in any JS/TS environment**
- 🌍 **Perfect for search, filtering, UI pickers, and data analysis**

---

## 📦 Installation

### npm
```bash
npm install full-emoji-list
```

### yarn
```bash
yarn add full-emoji-list
```

---

## 🚀 Usage

### ✅ Basic Import

```js
import fullEmojiList from "full-emoji-list";

console.log(fullEmojiList[0]);

// Output:
// {
//   CodePointsHex: ["1F600"],
//   Status: "fully-qualified",
//   Emoji: "😀",
//   Version: "E1.0",
//   Name: "grinning face",
//   Group: "Smileys & Emotion",
//   SubGroup: "face-smiling"
// }
```

---

### 🔍 Filtering by Group

```js
import fullEmojiList from "full-emoji-list";

const smileys = fullEmojiList.filter(
  emoji => emoji.Group === "Smileys & Emotion"
);

console.log(smileys);

// Output:
// [
//   {
//     CodePointsHex: ["1F600"],
//     Status: "fully-qualified",
//     Emoji: "😀",
//     Version: "E1.0",
//     Name: "grinning face",
//     Group: "Smileys & Emotion",
//     SubGroup: "face-smiling"
//   },
//   {
//     CodePointsHex: ["1F603"],
//     Status: "fully-qualified",
//     Emoji: "😃",
//     Version: "E0.6",
//     Name: "grinning face with big eyes",
//     Group: "Smileys & Emotion",
//     SubGroup: "face-smiling"
//   }
// ]
```

---

### 🔎 Searching by Name

```js
import fullEmojiList from "full-emoji-list";

const results = fullEmojiList.filter(
  emoji => emoji.Name.toLowerCase().includes("grinning")
);

console.log(results);

// Output:
// [
//   { Emoji: "😀", Name: "grinning face" },
//   { Emoji: "😃", Name: "grinning face with big eyes" }
// ]
```

---

## 🧬 Data Structure

| Field            | Type        | Description |
|------------------|-------------|-------------|
| `CodePointsHex`  | `string[]`  | Unicode code points in hexadecimal format |
| `Status`         | `string`    | Qualification status |
| `Emoji`          | `string`    | The actual emoji character |
| `Version`        | `string`    | Unicode Emoji version |
| `Name`           | `string`    | Official Unicode name |
| `Group`          | `string`    | High-level emoji category |
| `SubGroup`       | `string`    | More specific category |

---

## 📄 License

ISC License

---

## 👤 Author

Emre Erkan  
https://github.com/eerkan

---

Enjoy building with emojis! 🎉
