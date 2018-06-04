async function fetchcall(url, data) {
    const PostData = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json; charset=utf-8'
        },
        dataType: 'json',
        credentials: 'include'
    }
    if (data) { PostData.body = JSON.stringify(data) }
    try {
        //const url = 'services/common.asmx/fillcbopais'
        const response = await fetch(url, PostData)
        const jdata = await response.json();
        if (!response.ok) {
            swal(jdata.Message);
            //bootbox.alert({
            //    message: '<p class="text-center" style=" font-size: 20px;">' + jdata.Message + '</p>',
            //    size: 'small'
            //});
            //alert(jdata.Message);
            throw Error(jdata.Message)
        }
        return jdata.d

    } catch (e) {
        console.log(e)

    }
}

export default fetchcall