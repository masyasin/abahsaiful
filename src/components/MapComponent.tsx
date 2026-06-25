"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Pin {
  id: number;
  judul: string;
  status: string;
  warna: string;
  lokasi: string;
  lat: number;
  lng: number;
}

interface MapComponentProps {
  pins: Pin[];
  selectedPin: number | null;
  setSelectedPin: (id: number | null) => void;
}

export default function MapComponent({ pins, selectedPin, setSelectedPin }: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<number, L.Marker>>({});

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Center of Ciledug, Tangerang (Abah Saiful Milah's dapil): -6.228, 106.727
    const map = L.map(mapContainerRef.current, {
      center: [-6.228, 106.727],
      zoom: 13.5,
      zoomControl: true,
    });

    // Use a clean, beautiful OpenStreetMap light-themed tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapRef.current = map;

    // Add CSS animation style to document for the glowing pulse
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes leafletPulse {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.5); opacity: 0.2; }
        100% { transform: scale(0.9); opacity: 0.8; }
      }
      .leaflet-pulse-bg {
        animation: leafletPulse 2s infinite ease-in-out;
      }
      .custom-leaflet-marker {
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Update or add markers when pins or map changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    pins.forEach((pin) => {
      const pinHex = pin.warna === "biru" ? "#fbbf24" : pin.warna === "kuning" ? "#f59e0b" : pin.warna === "merah" ? "#ef4444" : "#d97706";
      
      const customIcon = L.divIcon({
        html: `
          <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
            <div class="leaflet-pulse-bg" style="position: absolute; width: 28px; height: 28px; border-radius: 50%; background-color: ${pinHex}; opacity: 0.4;"></div>
            <div style="position: absolute; width: 20px; height: 20px; border-radius: 50%; background-color: ${pinHex}; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; color: white;">
              ${pin.id}
            </div>
          </div>
        `,
        className: "custom-leaflet-marker",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([pin.lat, pin.lng], { icon: customIcon })
        .addTo(map)
        .on("click", () => {
          setSelectedPin(pin.id);
        });

      markersRef.current[pin.id] = marker;
    });
  }, [pins, setSelectedPin]);

  // Pan to selected pin when it changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || selectedPin === null) return;

    const selectedPinData = pins.find((p) => p.id === selectedPin);
    if (selectedPinData) {
      map.setView([selectedPinData.lat, selectedPinData.lng], 14.5, {
        animate: true,
        duration: 0.6,
      });
    }
  }, [selectedPin, pins]);

  return (
    <div 
      ref={mapContainerRef} 
      className="h-full w-full rounded-xl shadow-inner" 
      style={{ zIndex: 1 }}
    />
  );
}
