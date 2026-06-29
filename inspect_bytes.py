from pathlib import Path
p = Path(r'c:\Users\mansi123\Desktop\dr.jagruta\index.html')
data = p.read_bytes()
for token in ['â€œ','â€','â€™','â€“','â€”','â€¢','â˜…','â€¦','âœ“','âœ”','âœ…','ðŸ“','ðŸ“ž','âœ‰ï¸']:
    b = token.encode('utf-8')
    idx = data.find(b)
    print(token, 'utf8 bytes', b.hex(), 'idx', idx)
    if idx != -1:
        print(data[idx-20:idx+40])
        break
print('--- first 200 bytes ---')
print(data[:200])
