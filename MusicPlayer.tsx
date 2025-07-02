import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MusicPlayerProps {
  songTitle: string;
  artistName: string;
  coverImage: string;
  audioUrl?: string;
}

const MusicPlayer = ({ songTitle, artistName, coverImage, audioUrl }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <Card className="w-full max-w-sm mx-auto bg-white/95 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
      <CardContent className="p-0">
        {/* Cover Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={coverImage} 
            alt={`${songTitle} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Song Info */}
        <div className="p-4 space-y-3">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800">{songTitle}</h3>
            <p className="text-sm text-gray-600">{artistName}</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-300 flex items-center justify-end"
                style={{ width: `${progressPercentage}%` }}
              >
                <Heart className="text-white" size={8} />
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600"
            >
              <Volume2 size={20} />
            </Button>
            
            <Button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white shadow-lg"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-red-400"
            >
              <Heart size={20} />
            </Button>
          </div>
        </div>

        {/* Hidden audio/video element */}
        {audioUrl && (
          <audio ref={audioRef} src={audioUrl}>
            <source src={audioUrl} type="audio/mpeg" />
            <source src={audioUrl} type="video/mp4" />
            Tarayıcınız ses dosyasını desteklemiyor.
          </audio>
        )}
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
