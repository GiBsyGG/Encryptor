let btn_encrypt = document.getElementById('btn_encrypt');
let btn_decrypt = document.getElementById('btn_decrypt');
let btn_copy = document.getElementById('btn_copy');

let input_message = document.getElementById('input_message');
let no_output_message = document.getElementById('no_output_message');
let output_message = document.getElementById('output_message');
let output_anser_div = document.getElementById('answerContainer');

let encrypt_keys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat",
}

function encrypt(input) {

  let result = '';

  // Convertir cada caracter del input usando las llaves de encrypt_keys
  for(let char in input) {
    if(encrypt_keys.hasOwnProperty(input[char])) {
      result += encrypt_keys[input[char]];
    }
    else {
      result += input[char];
    } 
  }

  return result;
}

function decrypt(input) {
  // Convertir el input usando las llaves de encrypt_keys pero de forma inversa
  for(let key in encrypt_keys) {
    input = input.replace(encrypt_keys[key], key);
  }
  return input;

}

function encrypt_message() {

  if(!no_output_message.classList.contains('hidden')) {
    no_output_message.classList.add('hidden');
    output_anser_div.classList.remove('hidden');
  }
  let input_message = document.getElementById('input_message').value;

  // Vaciar el input
  input_message.value = '';

  let output = encrypt(input_message);
  output_message.innerText = output;
}

function decrypt_message() {
  
    if(!no_output_message.classList.contains('hidden')) {
        no_output_message.classList.add('hidden');
        output_anser_div.classList.remove('hidden');
    }

    let input_message = document.getElementById('input_message').value;
    
    // Vaciar el input
    input_message.value = '';

    let output = decrypt(input_message);
    output_message.innerText = output;
}

  const copiarContenido = async () => {
    try {

      await navigator.clipboard.writeText(output_message.innerText);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }


btn_encrypt.addEventListener('click', encrypt_message);
btn_decrypt.addEventListener('click', decrypt_message);
btn_copy.addEventListener('click', copiarContenido);
