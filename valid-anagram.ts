function isAnagram(s: string, t: string): boolean {

   const counterOfS: { [key: string]: number } = {}
   const counterOfT: { [key: string]: number } = {}

   if (s.length !== t.length)
      return false

   for (let index = 0; index < s.length; index++) {
      counterOfS[s[index]] = (counterOfS[s[index]] || 0) + 1
      counterOfT[t[index]] = (counterOfT[t[index]] || 0) + 1
   }

   for (const key in counterOfS) {
      if (counterOfS[key] !== counterOfT[key])
         return false
   }

   return true
   // return (s.split('').sort().join('') === t.split('').sort().join(''))
};



console.log(isAnagram('rat', 'tar'))
