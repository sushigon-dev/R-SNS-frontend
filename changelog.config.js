module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: [
    "feat",
    "fix",
    "docs",
    "test",
    "refactor",
    "setting",
    "style",
    "cicd",
    "perf",
    "add",
    "del",
  ],
  maxMessageLength: 64,
  minMessageLength: 1,
  questions: ["type", "scope", "subject", "issues"],
  scopes: [],
  types: {
    cicd: {
      description: "🎡CI/CDに関する更新",
      emoji: "🎡",
      value: "cicd",
    },
    docs: {
      description: "📄ドキュメント更新",
      emoji: "📄",
      value: "docs",
    },
    feat: {
      description: "🍻新機能実装",
      emoji: "🍻",
      value: "feat",
    },
    fix: {
      description: "🐛不具合修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "🚀パフォーマンス改善",
      emoji: "🚀",
      value: "perf",
    },
    refactor: {
      description: "💡リファクタリング",
      emoji: "💡",
      value: "refactor",
    },
    style: {
      description:
        "💄コーディングスタイルの更新（空白，フォーマット，記号，…）",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "🧪テストの更新",
      emoji: "🧪",
      value: "test",
    },
    setting: {
      description: "🔧設定ファイルの更新",
      emoji: "🔧",
      value: "setting",
    },
    add: {
      description: "➕️追加（❗️あんまり使うな❗️）",
      emoji: "➕️",
      value: "add",
    },
    del: {
      description: "🗑️削除（❗️あんまり使うな❗️）",
      emoji: "🗑️",
      value: "del",
    },
  },
  messages: {
    type: "どんなコミットですか？:",
    subject: "変更点簡潔に！！:\n",
    issues: "閉じる issue いくつ～？\n",
  },
};
