import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { 
  Megaphone, 
  Share2, 
  Search, 
  Code, 
  Smartphone,
  Palette, 
  Building2, 
  ShoppingCart,
  ArrowRight,
  Check,
  Target,
  BarChart3,
  Zap,
  Users,
  Globe,
  Layers,
  Shield,
  Clock,
  Star,
  TrendingUp,
  MessageSquare,
  Camera,
  PenTool,
  Monitor,
  Database,
  Lock,
  Rocket,
  Award,
  Heart,
  Home,
  Store,
  Mail,
  Phone
} from "lucide-react";

const services = [
  {
    id: "performance-marketing",
    icon: Megaphone,
    title: "Performance Marketing",
    headline: "Turn Ad Spend Into Revenue Growth",
    overview: "Stop wasting money on ads that don't convert. Our performance marketing experts craft precision-targeted campaigns across Google, Meta, TikTok, and LinkedIn that deliver qualified leads and measurable ROI—every single time.",
    price: "From AED 3,500/month",
    priceNote: "(ad spend separate)",
    shadowClass: "card-pop-red",
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
    platforms: [
      {
        name: "Google Ads Management",
        items: ["Search Ads that capture high-intent buyers", "Display Ads for brand awareness and retargeting", "Shopping Ads for e-commerce dominance", "YouTube Ads for video engagement", "Performance Max campaigns for maximum reach"]
      },
      {
        name: "Meta Ads (Facebook & Instagram)",
        items: ["Conversion-optimized ad creatives", "Advanced audience targeting and lookalikes", "Retargeting campaigns that close sales", "Lead generation forms that convert", "E-commerce catalog campaigns"]
      },
      {
        name: "TikTok Advertising",
        items: ["Viral-worthy video ad creation", "Influencer partnership campaigns", "Spark Ads leveraging organic content", "Shopping integrations"]
      },
      {
        name: "LinkedIn Ads (B2B Focus)",
        items: ["Executive decision-maker targeting", "Lead generation for professional services", "Account-based marketing campaigns", "Thought leadership content promotion"]
      }
    ],
    process: ["Audience Research", "Campaign Strategy", "Creative Development", "Launch & Monitor", "Optimize & Scale"],
    results: ["Lower cost per acquisition (CPA)", "Higher conversion rates", "Improved return on ad spend (ROAS)", "Qualified lead pipeline", "Transparent performance reporting"]
  },
  {
    id: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    headline: "Build a Community That Drives Business",
    overview: "Social media isn't just about posting pretty pictures—it's about building relationships, establishing authority, and driving real business outcomes. We manage your social presence end-to-end, so you can focus on running your business.",
    price: "From AED 2,800/month",
    shadowClass: "card-pop-blue",
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    platforms: [
      {
        name: "Strategic Planning",
        items: ["Comprehensive social media audit", "Competitor analysis", "Content strategy development", "Platform-specific best practices", "Hashtag research and strategy"]
      },
      {
        name: "Content Creation",
        items: ["20-30 monthly posts (platform-dependent)", "Professional graphic design", "Engaging Reels and video content", "Stories and interactive content", "Carousel posts and infographics", "Copywriting that converts"]
      },
      {
        name: "Community Management",
        items: ["Daily comment monitoring and responses", "DM management and customer service", "Reputation monitoring", "Engagement with relevant accounts", "Crisis management support"]
      },
      {
        name: "Growth & Engagement",
        items: ["Organic growth strategies", "Influencer identification and outreach", "Contest and giveaway management", "User-generated content campaigns", "Trend monitoring and participation"]
      },
      {
        name: "Analytics & Reporting",
        items: ["Monthly performance reports", "Audience insights and demographics", "Content performance analysis", "Competitor benchmarking", "Strategic recommendations"]
      }
    ],
    results: ["Content based on actual data, not assumptions", "Trend-jacking for maximum visibility", "Platform-native content (no recycling)", "Consistent brand voice across channels", "Fast response times to audience engagement"],
    perfectFor: ["Businesses wanting consistent online presence", "Brands looking to build authority", "Companies targeting younger demographics", "Service providers needing social proof", "E-commerce stores driving direct sales"]
  },
  {
    id: "seo-local-seo",
    icon: Search,
    title: "SEO & Local SEO",
    headline: "Rank Higher. Get Found. Grow Faster.",
    overview: "When your ideal customers search Google, do they find you—or your competitors? Our SEO experts use proven strategies to get your business ranking at the top of search results, driving consistent, high-quality organic traffic that converts.",
    price: "From AED 3,200/month",
    shadowClass: "card-pop-orange",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    platforms: [
      {
        name: "Technical SEO",
        items: ["Site speed optimization", "Mobile responsiveness", "Core Web Vitals improvement", "XML sitemap creation", "Robots.txt optimization", "SSL certificate implementation", "Structured data markup", "Crawl error resolution"]
      },
      {
        name: "On-Page SEO",
        items: ["Comprehensive keyword research", "Title tag and meta description optimization", "Header tag structure", "Content optimization", "Internal linking strategy", "Image optimization", "URL structure improvement", "Schema markup implementation"]
      },
      {
        name: "Off-Page SEO",
        items: ["High-quality backlink acquisition", "Guest posting on authoritative sites", "Digital PR and brand mentions", "Social signals optimization", "Online directory submissions", "Broken link building", "Competitor backlink analysis"]
      },
      {
        name: "Content Strategy",
        items: ["SEO-optimized blog writing", "Pillar content development", "FAQ sections", "Landing page copywriting", "Content gap analysis", "Keyword cluster strategy"]
      },
      {
        name: "Local SEO (Dubai-Focused)",
        items: ["Google Business Profile optimization", "Local citation building", "Review generation and management", "Local keyword targeting", "\"Near me\" search optimization", "Google Maps ranking", "Local link building", "Multi-location SEO (if applicable)"]
      },
      {
        name: "E-commerce SEO",
        items: ["Product page optimization", "Category page strategy", "Shopping feed optimization", "Review schema implementation", "Product descriptions", "Faceted navigation optimization"]
      }
    ],
    deliverables: ["Keyword ranking report", "Traffic and conversion analytics", "Technical SEO audit updates", "Backlink acquisition report", "Competitor analysis", "Content recommendations", "Strategic consultation call"],
    timeline: [
      { months: "Months 1-2", description: "Foundation and quick wins" },
      { months: "Months 3-4", description: "Visibility improvements" },
      { months: "Months 5-6", description: "Significant traffic growth" },
      { months: "Months 6+", description: "Sustained top rankings" }
    ]
  },
  {
    id: "website-development",
    icon: Code,
    title: "Website Design & Development",
    headline: "Websites That Look Stunning AND Convert",
    overview: "Your website is often the first impression customers have of your business. We build lightning-fast, mobile-responsive, conversion-optimized websites that turn visitors into customers—combining beautiful design with technical excellence.",
    price: "From AED 8,000",
    priceNote: "for basic corporate site",
    shadowClass: "card-pop-yellow",
    colorClass: "text-warning",
    bgClass: "bg-warning/10",
    whatWeBuild: [
      { name: "Corporate Websites", desc: "Professional online presence that establishes credibility and showcases your expertise." },
      { name: "E-commerce Stores", desc: "Full-featured online shops with seamless checkout experiences that maximize sales." },
      { name: "Portfolio & Agency Sites", desc: "Showcase your work with stunning visual presentations and intuitive navigation." },
      { name: "Landing Pages", desc: "High-converting standalone pages designed for specific campaigns or offers." },
      { name: "Booking & Appointment Systems", desc: "Integrated scheduling for service-based businesses with automated confirmations." },
      { name: "Custom Web Applications", desc: "Bespoke platforms tailored to your unique business requirements." }
    ],
    techStack: {
      frontend: ["Next.js (React Framework)", "React.js", "HTML5, CSS3, JavaScript", "Tailwind CSS / Bootstrap", "Responsive Design"],
      backend: ["Node.js", "PostgreSQL / MySQL", "RESTful APIs", "Cloud Hosting (AWS/Vercel)"],
      cms: ["Custom CMS", "WordPress (WooCommerce)", "Shopify", "Headless CMS integration"]
    },
    features: [
      { category: "Performance & Speed", items: ["Lightning-fast load times (<2 seconds)", "Image optimization and lazy loading", "Code minification", "CDN integration", "Caching strategies"] },
      { category: "User Experience", items: ["Intuitive navigation", "Mobile-first design approach", "Smooth animations and interactions", "Clear calls-to-action", "Accessibility standards (WCAG)"] },
      { category: "Conversion Optimization", items: ["Strategic CTA placement", "Trust signals and social proof", "Live chat integration", "Exit-intent popups", "Lead capture forms"] },
      { category: "SEO Foundation", items: ["Clean, semantic code", "SEO-friendly URL structure", "Optimized meta tags", "Fast Core Web Vitals", "XML sitemap"] },
      { category: "Security & Reliability", items: ["SSL certificates", "Regular backups", "Security monitoring", "GDPR compliance", "DDoS protection"] }
    ],
    integrations: ["Payment gateways (Stripe, PayPal, local UAE gateways)", "CRM systems (HubSpot, Salesforce)", "Email marketing (Mailchimp, SendGrid)", "Analytics (Google Analytics, Hotjar)", "Social media platforms", "WhatsApp Business API"],
    included: ["Fully responsive (desktop, tablet, mobile)", "Admin training and documentation", "1 year hosting (premium servers)", "1 year maintenance and support", "3 rounds of revisions", "Performance optimization", "Basic SEO setup", "Analytics integration", "Contact forms and social integration"],
    timeline: [
      { type: "Simple website", duration: "2-3 weeks" },
      { type: "Medium complexity", duration: "4-6 weeks" },
      { type: "Complex/E-commerce", duration: "6-10 weeks" }
    ]
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    headline: "Powerful Apps That Users Love",
    overview: "From concept to launch, we build intuitive, high-performance mobile applications that deliver exceptional user experiences and drive business value.",
    price: "From AED 25,000",
    priceNote: "for basic cross-platform app",
    shadowClass: "card-pop-blue",
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    appTypes: [
      { name: "Native iOS Apps", desc: "Swift-based applications optimized for iPhone and iPad with native performance." },
      { name: "Native Android Apps", desc: "Kotlin/Java applications for the Android ecosystem with Material Design." },
      { name: "Cross-Platform Apps", desc: "React Native and Flutter for cost-effective apps running on both platforms." },
      { name: "Progressive Web Apps (PWA)", desc: "Web-based apps with native-like features and offline capabilities." }
    ],
    categories: [
      { name: "Business & Productivity", items: ["Internal business tools", "Employee management systems", "CRM mobile apps", "Task and project management"] },
      { name: "E-commerce & Retail", items: ["Shopping apps with cart and checkout", "Loyalty program apps", "Product catalog apps", "Order tracking systems"] },
      { name: "On-Demand Services", items: ["Booking and scheduling apps", "Service marketplace platforms", "Delivery management apps", "Real-time tracking systems"] },
      { name: "Social & Community", items: ["Social networking apps", "Community platforms", "Forum and discussion apps", "Content sharing platforms"] },
      { name: "Healthcare & Fitness", items: ["Telemedicine apps", "Appointment booking", "Health tracking apps", "Fitness and wellness apps"] },
      { name: "Real Estate", items: ["Property listing apps", "Virtual tour apps", "Agent management systems", "Lead capture apps"] }
    ],
    features: ["User authentication (email, social login, biometric)", "Push notifications", "In-app messaging and chat", "Payment gateway integration", "Geolocation and maps", "Camera and photo upload", "Social media integration", "Offline functionality", "Real-time data synchronization", "Admin dashboard", "Analytics tracking", "Multi-language support"],
    included: ["Source code ownership", "App store deployment assistance", "3 months post-launch support", "Documentation and training", "Backend API development", "Admin panel for content management", "Analytics integration", "App store optimization basics"],
    timeline: [
      { type: "Basic app", duration: "8-12 weeks" },
      { type: "Medium complexity", duration: "12-16 weeks" },
      { type: "Complex app", duration: "16-24 weeks" }
    ]
  },
  {
    id: "branding-design",
    icon: Palette,
    title: "Branding & Creative Design",
    headline: "Create a Brand That Stands Out",
    overview: "Your brand is more than a logo—it's the emotional connection customers have with your business. We create cohesive, memorable brand identities that resonate with your audience and set you apart from competitors.",
    price: "From AED 2,500",
    shadowClass: "card-pop-red",
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
    services: [
      { name: "Brand Strategy", items: ["Brand positioning and messaging", "Target audience definition", "Competitive differentiation", "Brand voice and personality", "Value proposition development"] },
      { name: "Logo Design", items: ["Multiple concept exploration", "Unlimited revisions", "Vector file delivery", "Brand color palette", "Typography selection", "Logo usage guidelines"] },
      { name: "Brand Identity System", items: ["Logo variations (primary, secondary, icon)", "Color palette (primary, secondary, accent)", "Typography system", "Brand patterns and textures", "Icon library", "Photography style guide", "Brand voice guidelines"] },
      { name: "Marketing Collateral", items: ["Business card design", "Letterhead and envelope", "Email signature template", "Presentation templates", "Brochure and flyer design", "Product catalog design", "Corporate profile design"] },
      { name: "Digital Assets", items: ["Social media templates", "Website design elements", "Email newsletter templates", "Digital ads templates", "Social media cover images", "App icon design"] },
      { name: "Packaging Design", items: ["Product packaging concepts", "Label design", "Box and container design", "Bag and wrapping design", "Unboxing experience"] },
      { name: "Print Materials", items: ["Banner and poster design", "Signage design", "Vehicle wrap design", "Exhibition booth graphics", "Promotional materials"] },
      { name: "Social Media Branding", items: ["Platform-specific templates", "Story templates", "Highlight covers", "Post templates", "Reels templates"] }
    ],
    philosophy: ["Timeless over trendy", "Memorable and distinctive", "Versatile across mediums", "Aligned with business goals", "Culturally appropriate for UAE market"],
    packages: [
      { name: "Starter Package", price: "AED 2,500", items: ["Logo design (3 concepts)", "Basic brand guidelines", "Business card design", "Social media kit"] },
      { name: "Professional Package", price: "AED 5,000", items: ["Logo design (5 concepts)", "Comprehensive brand guidelines", "Complete stationery suite", "Social media branding kit", "Marketing collateral (2 designs)"] },
      { name: "Enterprise Package", price: "AED 8,000+", items: ["Full brand strategy", "Logo design (unlimited concepts)", "Complete brand identity system", "Comprehensive marketing materials", "Brand launch support", "Brand style guard (ongoing)"] }
    ],
    timeline: "2-6 weeks depending on scope"
  },
  {
    id: "real-estate-marketing",
    icon: Building2,
    title: "Real Estate Marketing",
    headline: "Fill Your Pipeline with Qualified Property Leads",
    overview: "The UAE real estate market is competitive. Our specialized real estate marketing strategies help developers, agencies, and brokers generate consistent, high-quality leads and close more deals.",
    price: "From AED 4,500/month",
    shadowClass: "card-pop-orange",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
    solutions: [
      { name: "Lead Generation Campaigns", items: ["Facebook & Instagram ads targeting property seekers", "Google Ads for high-intent searches", "Landing pages optimized for conversions", "Lead capture and qualification systems"] },
      { name: "Property Listing Optimization", items: ["Professional property photography", "Virtual tour creation", "Compelling listing descriptions", "SEO-optimized property pages", "Integration with property portals"] },
      { name: "Developer Marketing", items: ["Pre-launch buzz campaigns", "Project website development", "Investor presentation materials", "Virtual showroom creation", "Email marketing campaigns"] },
      { name: "Agent Branding", items: ["Personal branding strategy", "Professional headshots and content", "Agent website development", "Social media presence building", "Client testimonial campaigns"] },
      { name: "Content Marketing", items: ["Market insights and reports", "Neighborhood guides", "Investment opportunity articles", "First-time buyer guides", "Seller resources"] }
    ],
    differentiators: ["Deep understanding of UAE property market", "Proven lead generation systems", "Integration with Dubai Land Department data", "Multi-language campaign capabilities", "Compliance with UAE real estate marketing regulations"],
    results: ["Qualified lead generation", "Lower cost per lead", "Higher quality prospects", "Improved close rates", "Enhanced brand visibility"]
  },
  {
    id: "ecommerce-growth",
    icon: ShoppingCart,
    title: "E-commerce Growth",
    headline: "Scale Your Online Store Profitably",
    overview: "Selling online is complex. We provide end-to-end e-commerce solutions from store development to marketing to optimization—helping you maximize revenue and build a sustainable online business.",
    price: "From AED 6,000/month",
    shadowClass: "card-pop-yellow",
    colorClass: "text-warning",
    bgClass: "bg-warning/10",
    solutions: [
      { name: "Store Development", items: ["Shopify store setup and customization", "WooCommerce development", "Custom e-commerce platforms", "Product catalog setup", "Payment gateway integration", "Shipping integration", "Multi-currency support"] },
      { name: "E-commerce Marketing", items: ["Google Shopping campaigns", "Facebook catalog ads", "Instagram shopping", "Influencer collaborations", "Email marketing automation", "Retargeting campaigns"] },
      { name: "Conversion Rate Optimization", items: ["A/B testing", "Checkout optimization", "Product page improvements", "Trust signal implementation", "Cart abandonment recovery"] },
      { name: "E-commerce SEO", items: ["Product optimization", "Category page strategy", "Blog content creation", "Technical SEO", "Link building"] },
      { name: "Retention & Loyalty", items: ["Email flows (welcome, abandoned cart, post-purchase)", "Loyalty program setup", "SMS marketing", "Customer win-back campaigns"] },
      { name: "Analytics & Insights", items: ["Sales tracking dashboard", "Customer behavior analysis", "Product performance reports", "Marketing attribution", "Inventory insights"] }
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <FadeInView delay={index * 0.1}>
      <motion.a
        href={`#${service.id}`}
        className={`service-card h-full transition-all duration-300 ${service.shadowClass} block`}
        whileHover={{ scale: 1.02 }}
      >
        <div className={`w-14 h-14 rounded-2xl ${service.bgClass} flex items-center justify-center mb-6`}>
          <Icon className={`w-7 h-7 ${service.colorClass}`} />
        </div>
        <h3 className="text-xl font-display font-bold mb-3 text-foreground">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {service.headline}
        </p>
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <span className={`text-sm font-bold ${service.colorClass}`}>
            {service.price}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </motion.a>
    </FadeInView>
  );
};

const ServiceDetailSection = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;
  
  return (
    <section id={service.id} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <FadeInView>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl ${service.bgClass} flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${service.colorClass}`} />
              </div>
              <span className={`text-sm font-bold ${service.colorClass} uppercase tracking-wider`}>
                Service {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </FadeInView>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            <StaggeredText text={service.headline} />
          </h2>
          
          <FadeInView delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </FadeInView>
        </div>

        {/* Content based on service type */}
        {service.platforms && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {service.platforms.map((platform, pIndex) => (
              <FadeInView key={platform.name} delay={pIndex * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h4 className="text-lg font-display font-bold mb-4 text-foreground">{platform.name}</h4>
                  <ul className="space-y-2">
                    {platform.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        )}

        {service.whatWeBuild && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">What We Build</h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whatWeBuild.map((item, idx) => (
                <FadeInView key={item.name} delay={idx * 0.1}>
                  <div className="glass-card p-6 h-full">
                    <h4 className="text-lg font-display font-bold mb-2 text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {service.appTypes && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">App Development Services</h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {service.appTypes.map((item, idx) => (
                <FadeInView key={item.name} delay={idx * 0.1}>
                  <div className="glass-card p-6">
                    <h4 className="text-lg font-display font-bold mb-2 text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">App Types We Build</h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.categories?.map((cat, idx) => (
                <FadeInView key={cat.name} delay={idx * 0.1}>
                  <div className="glass-card p-6 h-full">
                    <h4 className="text-lg font-display font-bold mb-4 text-foreground">{cat.name}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {service.services && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Complete Branding Services</h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.services.map((svc, idx) => (
                <FadeInView key={svc.name} delay={idx * 0.05}>
                  <div className="glass-card p-6 h-full">
                    <h4 className="text-lg font-display font-bold mb-4 text-foreground">{svc.name}</h4>
                    <ul className="space-y-2">
                      {svc.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {service.solutions && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">
                {service.id === 'real-estate-marketing' ? 'Real Estate Marketing Solutions' : 'Complete E-commerce Solutions'}
              </h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.solutions.map((sol, idx) => (
                <FadeInView key={sol.name} delay={idx * 0.1}>
                  <div className="glass-card p-6 h-full">
                    <h4 className="text-lg font-display font-bold mb-4 text-foreground">{sol.name}</h4>
                    <ul className="space-y-2">
                      {sol.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {service.techStack && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Our Development Stack</h3>
            </FadeInView>
            <div className="grid md:grid-cols-3 gap-6">
              <FadeInView delay={0.1}>
                <div className="glass-card p-6">
                  <h4 className="text-lg font-display font-bold mb-4 text-foreground flex items-center gap-2">
                    <Monitor className="w-5 h-5" /> Frontend Technologies
                  </h4>
                  <ul className="space-y-2">
                    {service.techStack.frontend.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
              <FadeInView delay={0.2}>
                <div className="glass-card p-6">
                  <h4 className="text-lg font-display font-bold mb-4 text-foreground flex items-center gap-2">
                    <Database className="w-5 h-5" /> Backend Technologies
                  </h4>
                  <ul className="space-y-2">
                    {service.techStack.backend.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="glass-card p-6">
                  <h4 className="text-lg font-display font-bold mb-4 text-foreground flex items-center gap-2">
                    <Layers className="w-5 h-5" /> CMS Options
                  </h4>
                  <ul className="space-y-2">
                    {service.techStack.cms.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            </div>
          </div>
        )}

        {service.features && Array.isArray(service.features) && typeof service.features[0] === 'object' && 'category' in service.features[0] && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Key Features We Include</h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(service.features as { category: string; items: string[] }[]).map((feat, idx) => (
                <FadeInView key={feat.category} delay={idx * 0.1}>
                  <div className="glass-card p-6 h-full">
                    <h4 className="text-lg font-display font-bold mb-4 text-foreground">{feat.category}</h4>
                    <ul className="space-y-2">
                      {feat.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {service.packages && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Brand Package Options</h3>
            </FadeInView>
            <div className="grid md:grid-cols-3 gap-6">
              {service.packages.map((pkg, idx) => (
                <FadeInView key={pkg.name} delay={idx * 0.1}>
                  <div className={`glass-card p-6 h-full ${idx === 1 ? 'ring-2 ring-primary' : ''}`}>
                    {idx === 1 && (
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                        Most Popular
                      </span>
                    )}
                    <h4 className="text-lg font-display font-bold mb-2 text-foreground">{pkg.name}</h4>
                    <p className={`text-2xl font-bold ${service.colorClass} mb-4`}>{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {/* Results / Differentiators */}
        {(service.results || service.differentiators) && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">
                {service.differentiators ? 'What Makes Us Different' : 'Results You Can Expect'}
              </h3>
            </FadeInView>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(service.results || service.differentiators)?.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Check className={`w-5 h-5 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        {service.timeline && Array.isArray(service.timeline) && typeof service.timeline[0] === 'object' && 'months' in service.timeline[0] && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Timeline for Results</h3>
            </FadeInView>
            <div className="grid md:grid-cols-4 gap-4">
              {(service.timeline as { months: string; description: string }[]).map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="text-center p-6 rounded-xl bg-card border border-border">
                    <div className={`text-lg font-bold ${service.colorClass} mb-2`}>{item.months}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {/* Included items */}
        {service.included && (
          <div className="mb-16">
            <FadeInView>
              <h3 className="text-2xl font-display font-bold mb-8 text-foreground">What's Included</h3>
            </FadeInView>
            <div className="grid md:grid-cols-3 gap-4">
              {service.included.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Check className={`w-5 h-5 ${service.colorClass} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        )}

        {/* Price CTA */}
        <FadeInView delay={0.3}>
          <div className={`p-8 rounded-3xl ${service.bgClass} border-2 border-current ${service.colorClass.replace('text-', 'border-')}/20`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-display font-bold text-foreground mb-2">Investment</h4>
                <p className={`text-3xl font-bold ${service.colorClass}`}>
                  {service.price}
                  {service.priceNote && <span className="text-base font-normal text-muted-foreground ml-2">{service.priceNote}</span>}
                </p>
              </div>
              <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                <span className="cta-button inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="noise-overlay" />
        <div className="grid-overlay" />
        
        {/* Background shapes */}
        <div className="bg-shape bg-shape-blue w-96 h-96 -top-20 -right-20 blur-3xl" />
        <div className="bg-shape bg-shape-orange w-80 h-80 bottom-0 left-0 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                Our Services
              </span>
            </FadeInView>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
              <StaggeredText text="Comprehensive Digital Solutions That Drive" />
              <span className="block mt-2 highlight-orange">
                <StaggeredText text="Real Growth" delay={0.3} />
              </span>
            </h1>

            <FadeInView delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                From strategy to execution, from design to development—everything your business needs to dominate online.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                <span className="cta-button inline-flex items-center gap-2">
                  Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                </span>
              </MagneticButton>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                8 Specialized Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any service to explore detailed offerings, processes, and pricing.
              </p>
            </FadeInView>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <ServiceDetailSection key={service.id} service={service} index={index} />
      ))}

      {/* Final CTA Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="noise-overlay opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScaleInView>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
            </ScaleInView>
            
            <FadeInView delay={0.2}>
              <p className="text-lg text-background/70 mb-10">
                Let's discuss which services will drive the biggest impact for your specific goals.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                  <span className="cta-button inline-flex items-center gap-2">
                    Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                  </span>
                </MagneticButton>
                <MagneticButton href="#performance-marketing">
                  <span className="neon-button inline-flex items-center gap-2">
                    Explore Services
                  </span>
                </MagneticButton>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
