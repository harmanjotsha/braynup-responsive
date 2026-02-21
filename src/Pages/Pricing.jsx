import React from 'react';

const styles = {
  wrapper: {
    backgroundColor: '#000000',
    minHeight: '100%',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    padding: '20px',
    alignItems: 'stretch' // Ensure all cards stretch
  },
  
  card: {
    backgroundColor: '#111111',
    borderRadius: '12px',
    padding: '50px 24px 32px', // ऊपर padding बढ़ाई
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    border: '1px solid #222222'
  },
  
  popularCard: {
    border: '3px solid #D5DFFF'
  },
 
  popularBadge: {
    position: 'absolute',
    top: '0',  
    left: '0',  
    width: '100%',  // पूरा कार्ड कवर करेगा
    textAlign: 'center',
    backgroundColor: '#D5DFFF',
    color: '#1a1a1a',
    padding: '10px 0px',
    fontSize: '12px',
    fontWeight: '700',
    borderRadius: '9px 9px 0 0', // सिर्फ टॉप किनारे गोल
    zIndex: 10,
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  description: {
    color: '#94a3b8',
    fontSize: '14px',
    marginBottom: '24px',
    lineHeight: '1.5'
  },
  priceContainer: {
    marginBottom: '24px'
  },
  originalPrice: {
    color: '#64748b',
    textDecoration: 'line-through',
    fontSize: '14px',
    marginRight: '8px'
  },
  saveTag: {
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    color: '#a78bfa',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500'
  },
  price: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: '12px'
  },
  currencySymbol: {
    fontSize: '20px',
    marginRight: '4px'
  },
  amount: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1'
  },
  period: {
    color: '#64748b',
    marginLeft: '4px'
  },
  freeMonths: {
    color: '#a78bfa',
    fontSize: '14px',
    marginBottom: '24px'
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    border: '1px solid #2d2d2d',
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: '16px',
    transition: 'all 0.2s'
  },
  popularButton: {
    backgroundColor: '#7c3aed',
    border: 'none',
  },
  renewalPrice: {
    color: '#64748b',
    fontSize: '14px',
    marginBottom: '32px'
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '24px'
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#e2e8f0',
    fontSize: '14px'
  },
  checkIcon: {
    color: '#2dd4bf',
    flexShrink: 0
  },
  seeAllFeatures: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#a78bfa',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0',
    marginTop: 'auto'
  },
  paymentTerms: {
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
    color: '#475569',
    marginTop: '32px'
  }
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={styles.checkIcon}>
    <path 
      fill="currentColor" 
      d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
    />
  </svg>
);

const PricingCard = ({ plan, price, monthlyPrice, features, popular }) => (
  <div style={{
    ...styles.card,
    ...(popular ? styles.popularCard : {}),
    ...(plan === "Cloud Startup" ? { minHeight: '600px' } : {}),
  }}>
    {popular && (
      <div style={styles.popularBadge}>MOST POPULAR</div>
    )}
    
    <h3 style={styles.title}>{plan}</h3>
    <p style={styles.description}>{features}</p>

    <div style={styles.priceContainer}>
      <span style={styles.originalPrice}>₹{monthlyPrice}</span>
      <span style={styles.saveTag}>
        SAVE {popular ? '50%' : '64%'}
      </span>
      
      <div style={styles.price}>
        <span style={styles.currencySymbol}>₹</span>
        <span style={styles.amount}>{price}</span>
        <span style={styles.period}>/mo</span>
      </div>
    </div>

    <div style={styles.freeMonths}>+2 months free</div>

    <button style={{
      ...styles.button,
      ...(popular ? styles.popularButton : {})
    }}>
      Choose plan
    </button>

    <div style={styles.renewalPrice}>
      ₹ {monthlyPrice}/mo when you renew
    </div>

    <div style={styles.featuresList}>
      {[
        `~${price === '249.00' ? '100,000' : price === '699.00' ? '200,000' : '300,000'} visits monthly`,
        `Up to ${price === '249.00' ? '100' : '300'} websites`,
        'Managed Hosting for WordPress',
        `${price === '249.00' ? '200' : price === '699.00' ? '200' : '250'} GB NVMe storage`,
        `${price === '249.00' ? '600,000' : price === '699.00' ? '2,000,000' : '3,000,000'} files and directories (inodes)`,
        `${price === '249.00' ? '50' : price === '699.00' ? '100' : '200'} PHP workers`,
        `${price === '249.00' ? '1.5' : price === '699.00' ? '3' : '6'} GB RAM`,
        'Free domain (₹749.00 value)',
        'Free SSL',
        'Free email',
        'Free CDN',
        'Dedicated IP address',
        'Priority support'
      ].map((feature, index) => (
        <div key={index} style={styles.feature}>
          <CheckIcon />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <button style={styles.seeAllFeatures}>
      See all features
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
);

const Pricing = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <PricingCard
            plan="Business"
            price="249.00"
            monthlyPrice="499.00"
            features="Level up with more power and enhanced features"
            popular={false}
          />
          <PricingCard
            plan="Cloud Startup"
            price="699.00"
            monthlyPrice="1,399.00"
            features="Optimised for business and eCommerce websites"
            popular={true}
          />
          <PricingCard
            plan="Cloud Professional"
            price="999.00"
            monthlyPrice="2,999.00"
            features="Optimised for scaling professional websites"
            popular={false}
          />
        </div>
        <div style={styles.paymentTerms}>
          Payment terms
        </div>
      </div>
    </div>
  );
};

export default Pricing;