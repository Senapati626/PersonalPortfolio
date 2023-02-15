const form = document.getElementById("messageform")


form.addEventListener("submit",async(e)=>{
    e.preventDefault();

    try {
        const response = await fetch('https://fragile-pink-dog.cyclic.app/message',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target[0].value,
                message: e.target[1].value
            })
        })
        if(response.status===200){
            document.getElementById("submit-btn").innerHTML = "Got it !!!"
        }
    } catch (error) {
        console.log(error)
    }
})