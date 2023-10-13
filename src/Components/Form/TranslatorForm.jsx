import "./TranslatorForm.css"

import React from 'react'

const TranslatorForm = () => {
    
    const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ar&api-version=3.0&profanityAction=NoAction&textType=plain';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e65f128d9cmsh3955da5e5d62299p1139c0jsn17a58f3f0e84',
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	},
	body: [
		{
			Text: 'I would really like to drive your car around the block a few times.'
		}
	]
};

try {
	const response =  fetch(url, options);
	const result =  response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


  return (
    <section className="translator container overeflow-hidden ">
        <div className="row-wrapper row gx-3">
            <h1 className="col-12  "> Translator App  </h1>
            <form action="#">
                <textarea className="text-box  col-5 p-3  " placeholder="Enter Text " rows="10"></textarea>
                
                <textarea className="text-box  col-5 p-3 " placeholder="Enter Text " rows="10">
                </textarea>
                <select className="align-top " name="select-lang" id="select-lang">
                        <option value="ar">ألعربية</option>
                        <option value="ar">Dutch</option>
                        <option value="ar">Tukish</option>
                        <option value="ar">esnpaniol</option>
                    </select>
            </form>
        </div>
    </section> 
  )
}

export default TranslatorForm