import React from 'react';

const Footer = () => (
<footer>
	<div className="container">
		<div className="row">
			<div className="table-container">
				<div className="table-col middle col-padding col-md-4">
					<div className="footer-logo-block">
						<img className="img-max-width" src="/images/logo-on-black.png" alt=""/>
					</div>

				</div>
				<div className="table-col col-padding col-md-8">
					<div className="footer-nav-block">
						<ul className="block-ul">
							<li><a href="">Pomoc</a></li>
							<li><a href="">Regulamin</a></li>
							<li><a href="">Kontakt</a></li>
						</ul>
						<a className="block-facebook-link" href="www.facebook.com"></a>
						<a className="block-twitter-link" href="www.twitter.com"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
)

export default Footer
