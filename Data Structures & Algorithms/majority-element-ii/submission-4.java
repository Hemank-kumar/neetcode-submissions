class Solution {
    public List<Integer> majorityElement(int[] nums) {
       int e1 = 0;
       int e2 = 0;
       int c1 = 0;
       int c2 = 0;

       for(int ele : nums){
        if(ele == e1){
            c1++;
        }else if(ele == e2){
            c2++;
        }else if(c1 == 0){
            e1 = ele;
            c1++;
        }else if(c2 == 0){
            e2 = ele;
            c2++;
        }else{
            c1--;
            c2--;
        }
       } 

       c1 = 0;
       c2 = 0;

       for(int ele : nums){
        if(ele == e1)c1++;
        else if(ele == e2 ) c2++;
       }

       int maj = nums.length/3;
       List<Integer> ls = new ArrayList<>();

       if(e1 == e2){
        if(c1>maj)ls.add(e1);
       }else{
        if(c1>maj)ls.add(e1);
        if(c2>maj)ls.add(e2);
       }

       return ls;
    }
}