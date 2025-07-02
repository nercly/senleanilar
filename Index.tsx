import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Lock, MessageCircle } from "lucide-react";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "askim123"; // Şifre

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-romantic flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-love rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">SİZE ÖZEL ŞİFRE</h1>
            <p className="text-gray-600">Aşkımızın gizli dünyasına hoş geldiniz 💕</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Şifre:</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi girin..."
                className="w-full"
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              />
            </div>
            <Button 
              onClick={handlePasswordSubmit}
              className="w-full bg-gradient-love text-white"
            >
              <Heart className="mr-2" size={16} />
              Giriş
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-romantic">
      {/* Header */}
      <div className="relative h-80 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <div className="mb-6">
              <Heart className="mx-auto mb-4 heart-float" size={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sude'nin Özel Dünyası</h1>
            <p className="text-xl opacity-90">Canım benim, hayatımın anlamı 💕</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-10">
        {/* Profile Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face" 
              alt="Sude"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-200 shadow-lg"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sude Kayra</h2>
            <p className="text-pink-600 font-medium mb-4">Hayatımın Aşkı 💕</p>
          </div>
        </div>

        {/* Music Player Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">SEÇTİĞİNİZ MÜZİK</h3>
            <p className="text-gray-600">Bizim şarkımız 💕</p>
          </div>
          <div className="flex justify-center">
            <MusicPlayer
              songTitle="Dilerim Ki"
              artistName="Bu Şarkı Senin İçin En Özel Şarkımız"
              coverImage="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop"
              audioUrl="/path-to-your-song.mp4"
            />
          </div>
        </div>

        {/* Photos Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Özel Fotoğraflarımız</h3>
            <p className="text-gray-600">Her karesi bir anı 📸</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=300&fit=crop"
            ].map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={photo} 
                  alt={`Bizim fotoğrafımız ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Romantic Message */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8 shadow-xl border border-pink-200">
          <div className="text-center">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=300&fit=crop"
                alt="Romantic couple"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl md:text-2xl font-bold">
                  O MELEK GÜLÜŞÜNÜ<br/>
                  KORUMAK İÇİN HEP<br/>
                  UĞRAŞACAĞIM❤️
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Love Letter */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl">
          <div className="text-center mb-6">
            <MessageCircle className="mx-auto mb-4 text-pink-500" size={40} />
            <h3 className="text-2xl font-bold text-gray-800">Sude'ye Özel Mektubum 💌</h3>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p className="text-center font-medium">Canım Sude'ciğim,</p>
            <p>
              Sen hayatıma girdiğin günden beri her şey daha güzel, daha anlamlı. 
              Gözlerindeki o ışık, gülüşündeki samimiyet, kalbindeki sıcaklık... 
              Her şeyin beni daha iyi bir insan yapıyor.
            </p>
            <p>
              Seninle geçirdiğim her an bir hediye. Sabah kahvemizi içerken, 
              akşam filmleri izlerken, sadece yan yana otururken bile... 
              Zamanın durduğunu hissediyorum.
            </p>
            <p className="text-center font-medium text-pink-600">Sonsuza kadar seninle, sevginle... 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
