
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import IntegrationSection from '@/components/IntegrationSection';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import CallToActionSection from '@/components/CallToActionSection';
import ParticleBackground from '@/components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast when component mounts
    setTimeout(() => {
      toast({
        title: "Welcome to SocialMesh",
        description: "Discover the power of your social connections.",
        duration: 5000,
      });
    }, 2000);
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-nexus-dark relative">
      <ParticleBackground />
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <WorkflowVisualization />
      <IntegrationSection />
      <CallToActionSection />
      
      <footer className="relative z-10 bg-nexus-dark/90 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start">
            <div className="mb-12 flex flex-col md:flex-row justify-between w-full">
              <div className="mb-8 md:mb-0">
                <span className="text-2xl font-bold text-gradient mb-3 block">SocialMesh</span>
                <p className="text-gray-400 max-w-sm">
                  Transform your social connections with AI-powered network visualization and automated relationship management.
                </p>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-nexus-dark/60 hover:bg-nexus-purple/20 border border-gray-800 transition-colors">
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-nexus-dark/60 hover:bg-nexus-purple/20 border border-gray-800 transition-colors">
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-nexus-dark/60 hover:bg-nexus-purple/20 border border-gray-800 transition-colors">
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-3">Product</h4>
                  <ul className="space-y-2">
                    <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Get Started</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="w-full pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} SocialMesh. All rights reserved.
              </p>
              <div className="flex items-center">
                <span className="flex items-center text-sm text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                  All services are online
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
