function scatterConfetti(fieldId, count) {
  const field = document.getElementById(fieldId);
  const kinds = ["dot", "dot", "bar", "bar", "ribbon"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    el.className = "confetti " + kind;
    el.style.left = Math.random() * 100 + "%";
    el.style.setProperty("--d", Math.random() * 6 + "s");
    el.style.animationDuration =
      5 + Math.random() * 4 + "s, " + (2 + Math.random() * 2) + "s";
    field.appendChild(el);
  }
}
scatterConfetti("field1", 26);
scatterConfetti("field2", 26);
