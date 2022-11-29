import { Notify } from 'quasar'

export function jsonToFormdata(json) {
    let formData = new FormData()
    for (const [key, value] of Object.entries(json)) {
       formData.append(key, value) 
    }
    return formData
}
export function displayErrors(errors) {
    errors.forEach((error)=>{
        Notify.create({
            message: error
        })
    })
}