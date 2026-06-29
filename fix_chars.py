from pathlib import Path

root = Path(r'c:\Users\mansi123\Desktop\dr.jagruta')
files = [p for p in root.glob('*.html')] + [p for p in root.glob('*.js')]
replacements = {
    'â€œ': '“',
    'â€': '”',
    'â€™': "'",
    'â€“': '–',
    'â€”': '—',
    'â€¢': '•',
    'â˜…': '★',
    'â€¦': '…',
    'âœ“': '✓',
    'âœ”': '✔',
    'âœ…': '✓',
    'ðŸ“': '📍',
    'ðŸ“ž': '📞',
    'âœ‰ï¸': '✉️',
}

for p in files:
    try:
        text = p.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        text = p.read_text(encoding='cp1252')
    updated = text
    for src, dst in replacements.items():
        updated = updated.replace(src, dst)
    if updated != text:
        p.write_text(updated, encoding='utf-8')
        print(f'updated {p.name}')
