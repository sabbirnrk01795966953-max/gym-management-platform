export const gym = {
 name: process.env.NEXT_PUBLIC_GYM_NAME || "IRON DISTRICT",
 phone: process.env.NEXT_PUBLIC_GYM_PHONE || "+8801700000000",
 address: process.env.NEXT_PUBLIC_GYM_ADDRESS || "Dhaka, Bangladesh",
 map: process.env.NEXT_PUBLIC_GYM_MAP_URL || "https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed",
 facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
 instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
 youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
};
export const plans = [
 {name:'DAY PASS',price:350,period:'day',description:'A powerful one-day workout',features:['Access to gym floor','Locker facilities','All equipment access']},
 {name:'MONTHLY',price:2500,period:'month',description:'The perfect start to your fitness journey',features:['Unlimited gym access','Cardio & strength zones','Locker facilities','Trainer orientation'],featured:true},
 {name:'QUARTERLY',price:6500,period:'3 months',description:'Commit, build, transform',features:['Everything in Monthly','Free fitness assessment','Workout guidance','Priority support']},
 {name:'ANNUAL',price:22000,period:'year',description:'Train consistently, save more',features:['Everything in Quarterly','Goal setting session','Exclusive member benefits','Best long-term value']}
];
export const photoSections = [
 {title:'Strength zone',category:'Equipment',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'},
 {title:'Move with purpose',category:'Training',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80'},
 {title:'Premium facilities',category:'Facilities',img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'},
 {title:'The cardio club',category:'Equipment',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80'},
];
