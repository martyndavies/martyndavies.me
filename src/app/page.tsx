"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, ChevronDown, ChevronUp, Play, Clock, Twitter, Star, GitFork, AlertCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NexmoIcon, SendGridIcon, DevToIcon, ZuploIcon, SuperfaceIcon, OrbitIcon } from "@/components/company-icons";
import { VideoModal } from "@/components/video-modal";
import { useState } from "react";
import speakingData from "../../data/speaking.json";
import writingData from "../../data/writing.json";
import videosData from "../../data/videos.json";
import opensourceData from "../../data/opensource.json";

const getCompanyIcon = (site: string) => {
  switch (site?.toLowerCase()) {
    case 'nexmo':
      return <NexmoIcon className="w-4 h-4" />;
    case 'sendgrid':
      return <SendGridIcon className="w-4 h-4" />;
    case 'dev.to':
      return <DevToIcon className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function Home() {
  const [showAllWriting, setShowAllWriting] = useState(false);
  const [showAllSpeaking, setShowAllSpeaking] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllOpensource, setShowAllOpensource] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ videoId: string; title: string } | null>(null);

  const displayedWriting = showAllWriting ? writingData : writingData.slice(0, 6);
  const displayedSpeaking = showAllSpeaking ? speakingData : speakingData.slice(0, 6);
  const displayedVideos = showAllVideos ? videosData : videosData.slice(0, 6);
  const displayedOpensource = showAllOpensource ? opensourceData : opensourceData.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Theme toggle in top right */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="text-left mb-16">
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
              Martyn Davies
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Developer Relations, Technical Writing & Speaking
          </p>
        </header>

        {/* About Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* About Text */}
            <Card className="py-6 px-3 h-full flex flex-col md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl">About</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center">
                <p className="text-lg leading-relaxed mb-6">
                  I&apos;m a Developer Relations professional with extensive experience in technical writing, 
                  community building, and conference speaking. I focus on bridging the gap between 
                  developers and technology companies, creating content and experiences that help 
                  developers succeed.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://github.com/martyndavies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://linkedin.com/in/martyndavies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://twitter.com/martynd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Twitter className="h-5 w-5" />
                      <span>X (Twitter)</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://dev.to/martyndavies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <DevToIcon className="h-5 w-5" />
                      <span>Dev.to</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Brief History */}
            <Card className="py-6 px-3 h-full flex flex-col justify-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl">Brief History</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center">
                <div className="space-y-3">
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://zuplo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 h-auto">
                      <ZuploIcon className="h-8 w-8 flex-shrink-0" />
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-medium">Developer Relations</span>
                        <span className="text-xs text-muted-foreground">Zuplo • 2024-Present</span>
                      </div>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://superface.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 h-auto">
                      <SuperfaceIcon className="h-8 w-8 flex-shrink-0" />
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-medium">Developer Relations</span>
                        <span className="text-xs text-muted-foreground">Superface • 2023-2024</span>
                      </div>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start cursor-pointer">
                    <a href="https://orbit.love" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 h-auto">
                      <OrbitIcon className="h-8 w-8 flex-shrink-0" />
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-medium">Head of Developer Relations</span>
                        <span className="text-xs text-muted-foreground">Orbit • 2021-2023</span>
                      </div>
                    </a>
                  </Button>
                  <div className="pt-2">
                    <Button variant="ghost" asChild className="w-full cursor-pointer px-2">
                      <a href="https://linkedin.com/in/martyndavies" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground text-center">
                        <span>See more on LinkedIn</span>
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {opensourceData.slice(0, 3).map((project, index) => (
              <a 
                key={index}
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <Card className="border hover:bg-accent hover:text-accent-foreground transition-colors py-1 px-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <Github className="h-3 w-3 flex-shrink-0" />
                      <span className="font-medium text-sm truncate">{project.name}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3" />
                        <span>{project.stars}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.language}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Videos</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedVideos.map((video, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedVideo({ videoId: video.videoId, title: video.title })}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-t-md"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-t-md flex items-center justify-center">
                    <div className="bg-secondary text-secondary-foreground rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="px-3 py-2 h-auto cursor-pointer rounded-md"
                    onClick={() => setSelectedVideo({ videoId: video.videoId, title: video.title })}
                  >
                    <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      Watch video <Play className="h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {videosData.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllVideos(!showAllVideos)}
                variant="outline"
                className="cursor-pointer"
              >
                {showAllVideos ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>See More ({videosData.length - 6} more) <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Writing Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Writing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedWriting.map((article, index) => (
              <Card key={index} className="group relative">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 cursor-pointer"
                    >
                      {article.title} <ExternalLink className="h-4 w-4 flex-shrink-0" />
                    </a>
                  </CardTitle>
                </CardHeader>
                {article.site && (
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.site}
                    </Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>
          {writingData.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllWriting(!showAllWriting)}
                variant="outline"
                className="cursor-pointer"
              >
                {showAllWriting ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>See More ({writingData.length - 6} more) <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Speaking Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Speaking</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedSpeaking.map((talk, index) => (
              <Card key={index} className="group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight">
                    <a 
                      href={talk.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 cursor-pointer"
                    >
                      {talk.title} <ExternalLink className="h-4 w-4 flex-shrink-0" />
                    </a>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          {speakingData.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllSpeaking(!showAllSpeaking)}
                variant="outline"
                className="cursor-pointer"
              >
                {showAllSpeaking ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>See More ({speakingData.length - 6} more) <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Open Source Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Open Source</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedOpensource.map((project, index) => (
              <Card key={index} className="group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 cursor-pointer"
                    >
                      <Github className="h-4 w-4 flex-shrink-0" />
                      {project.name}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                      {project.issues > 0 && (
                        <div className="flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{project.issues}</span>
                        </div>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.language}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {opensourceData.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllOpensource(!showAllOpensource)}
                variant="outline"
                className="cursor-pointer"
              >
                {showAllOpensource ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>See More ({opensourceData.length - 6} more) <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="cursor-pointer">
                <a href="https://github.com/martyndavies" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="cursor-pointer">
                <a href="https://linkedin.com/in/martyndavies" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="cursor-pointer">
                <a href="https://twitter.com/martynd" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="cursor-pointer">
                <a href="https://dev.to/martyndavies" target="_blank" rel="noopener noreferrer">
                  <DevToIcon className="h-5 w-5" />
                  <span className="sr-only">Dev.to</span>
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Martyn Davies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.videoId || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}
