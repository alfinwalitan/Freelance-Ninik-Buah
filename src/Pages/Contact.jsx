// Import CSS
import '../Styling/Contact.css';

function Contact() {
    return (
        <>
            <div className='contact-section'>
                <div className='contact-header-text'>
                    <h1 className='title-h1'>
                        Kontak Kami
                    </h1>

                    <p className='subtitle-p'>
                        Ayo Hubungi Kami!
                    </p>
                </div>
            </div>

            <div className='contact-desc'>
                <div className='contact-desc-detail'>
                    <div className='contact-desc-detail-left'>
                        <p>
                            Silahkan Gunakan Formulir Ini atau Kirimkan Email Kepada Kami. Panggilan Telepon Biasa juga Bisa.
                        </p>

                        <div className='info-item'>
                            <i className='fa fa-phone'></i>
                            <span>+6212345678</span>
                        </div>

                        <div className='info-item'>
                            <i className='fa fa-envelope'></i>
                            <span>ninikbuah@gmail.com</span>
                        </div>

                        <div className='info-item'>
                            <i className='fas fa-location-dot'></i>
                            <span>Jl. Brigjend Katamso No.590, Kp. Baru, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20217</span>
                        </div>
                    </div>

                    <div className='contact-desc-detail-right'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='name-input'>Nama</label>
                                <input type='text' className='name-input' required />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email-input'>Email</label>
                                <input type='email' className='email-input' required />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='message-input'>Pesan Kamu</label>
                                <textarea name='message-input' id='' required></textarea>
                            </div>

                            <button className='contact-submit-button'>
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='map-container'>
                <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.146431023454!2d98.68846520000002!3d3.553708900000045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031306e912de39d%3A0xf7656d3b1c88abb3!2sJl.%20Brigjend%20Katamso%20No.590%2C%20Kp.%20Baru%2C%20Kec.%20Medan%20Maimun%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020217!5e0!3m2!1sid!2sid!4v1777372200523!5m2!1sid!2sid'
                        width='100%'
                        height='600'
                        style={{ border:0 }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title='Google Maps'
                    ></iframe>
            </div>
        </>
    )
}

export default Contact;