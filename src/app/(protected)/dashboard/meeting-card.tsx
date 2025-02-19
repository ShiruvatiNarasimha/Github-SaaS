"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { useDropzone } from "react-dropzone";

const MeetingCard = () => {
  const [progress, setProgress] = React.useState(0);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "audio/*": [".mp3", ".wav", ".m4a"],
    },
    multiple: false,
    maxSize: 50000000,
  });
  return (
    <Card className="col-span-2 flex flex-col items-center justify-center"></Card>
  );
};
