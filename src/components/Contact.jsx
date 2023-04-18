import React, { Component } from "react";

class Contact extends Component {
  state = {
    publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK----- Version: GopenPGP 2.4.7
Comment: https://gopenpgp.org
xsBNBGBwB8EBCAC8nGPFQLWNiKq1R59CTHybTMwXPtnJXCHDLfT7ChljkUTjCe9b
M07zkYagO5qJvjVEWNg/ldWC/XZnoDRnQsW+wY9kFzYkQUnqVL1Du1cXMeDHKrNV
RFUylLooGnYwIQXcG8REroMLcHAeRHrGjmjYriXZynWar5XhraRXUKIloURl6TqZ
vSTip7Ql6xT2UYCotCbOJ/Po6d2FreNb6C1LmtGURIAD8y4o3z1CPrE/u5Wwbioi
711CZT1GwTP123moYZyz5DA1KR2+pk+9xYLlEQbSrO8JGNIjDVwQFyrJGKUxXPty
epGc5F0vSs1qz0xSLOOunJ9JUE7msydLdh0ZABEBAAHNH3dlc2xleWVtQHBtLm1l
IDx3ZXNsZXllbUBwbS5tZT7CwI0EEAEIACAFAmBwB8EGCwkHCAMCBBUICgIEFgIB
AAIZAQIbAwIeAQAhCRAe92Yhl29QqhYhBBuuXIn7C4xgYrBG4B73ZiGXb1CqiHYH
/35SQrNlDvUPXLabtGB92hYIOUFyu1gJSDeBrKLBhAaY+f7ci6e2SXiWBHoqxgG1
palE0KTwe4tSZVXZhi2Y2MjuAjryRr7tiBC6puCoF8DaA8B4If2yvFAwd4xaiFs3
pWXRZMATWR/qSJ1ToNFCV2p9vBn+gjUEs/9u3zl/cC0TL4BROLUtnK6NbP/AQ155
5gZzSjfjAq1zAHHOS4kTKA6gXArrAB22ZQKKqZ0CHX6Dpc1UA2FRMZQP2RMI+dlY
kKoibDBCI7oNJd17wHoVBkCcuU+mM2MIjkSu6FTxBcghPDxyTVbHWfW2/16CHLKL
Gog8RS0qYCpvHi+okpb0wsnOwE0EYHAHwQEIAKeHl7mkL88ZNDxqegS27M1fIuB/
59AVQ0DzGZx+/bY7Len1DXQXrnQCzpsdsnjBBm1s2CvUZ3UxRrWo+zzVySAolDj8
K0XjzZ1csGjML7zkRoKof+2phWZ1+ZfPv1dLdkDMJijQRzi/0MfqSXlFplApeyzb
tTLGna8uJY+5eWP9Ycn/Y53dfhOXIx7/BikVgfyjVCIysxLAQQMw3ZnWOJsFSWh4
UI9FZ/+CIBfwu8MWkyzSR4qxm+z1YfOSURJ0sG8jyLTmQeodv54j73YazizBkEsu
bBJ9d6LWS0OcH/LCE3AZvn2WEVEPEsKl0r/GSpPnL8X0SDPfwYQXq2X7+4MAEQEA
AcLAdgQYAQgACQUCYHAHwQIbDAAhCRAe92Yhl29QqhYhBBuuXIn7C4xgYrBG4B73
ZiGXb1CqqlUH/1W7fLKRtfXX6KwZIqRGkV/zrkZt9/TUFdgkI3iQhyMem+lD2HvV
PuTwYWPUb6j8Q1nNKt4J58WsrbMi1+5aGQxqz1RgZviMrGJDHjrGv+6osYpPm0K9
bufDZ11jX/Bm1HyJISsfbPf8SuSvoPYDB2qUn64dKVI/VO25cFAAriLdkQ5Tbkvm
OniFfyt1zd9KtTAEVepsnjCQYlWaR3oloO43zUkqvxppq1fMhHmyrbMlxg0m8iOq
s4370keDjZbqhIgW3Jw5PMIbvDDqbf8QrcugO+5Gs1VqIRUOOTaHL1u/AuCxNCOi
t/tR17lNsDg1xJy/NzFRJDv4CdzJYIj2/xE= =JIDA
-----END PGP PUBLIC KEY BLOCK-----`,
  };
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>wesleyem@pm.me</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <pre>
                <code>{this.state.publicKey}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
