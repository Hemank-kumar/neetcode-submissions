class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int len = s.length();
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < len; i++) {
            char ch = s.charAt(i);
            if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
        }
        for (int i = 0; i < len; i++) {
            char ch = t.charAt(i);
            if (!map.containsKey(ch) || map.get(ch) <= 0) {
                return false;
            } else if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) - 1);
            }
        }
        return true;
    }
}
