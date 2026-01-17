"use client";

import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function ProfileCompletionModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const checklistItems = [
        { label: "Where are your ideal customers located? (USA/India)", completed: false },
        { label: "Which social media platform are your users mainly active on? (LinkedIn/Insta/Twitter/Facebook)", completed: false },
        { label: "Which department usually buys your solution?", completed: false },
        { label: "List 3-5 job titles you target most often", completed: false },
    ];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[420px] border-border bg-card text-card-foreground p-0 gap-0 overflow-hidden shadow-2xl transition-colors duration-300">
                <div className="p-5 pb-2">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <DialogTitle className="text-lg font-bold text-foreground mb-1">Complete Your Profile</DialogTitle>
                            <DialogDescription className="text-muted-foreground text-xs leading-snug">
                                Your account setup is 80% complete. Please add the following details to unlock full features.
                            </DialogDescription>
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                            <span className="text-muted-foreground">Setup Progress</span>
                            <span className="text-emerald-500">80%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-full bg-emerald-500 transition-all duration-500 ease-in-out" style={{ width: "80%" }} />
                        </div>
                    </div>

                    <div className="space-y-2 mb-5">
                        {checklistItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border bg-muted/30 transition-colors hover:bg-muted/50">
                                {item.completed ? (
                                    <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-500 flex-shrink-0" />
                                ) : (
                                    <Circle className="mt-0.5 w-4 h-4 text-muted-foreground flex-shrink-0" />
                                )}
                                <span className={`text-xs ${item.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 pt-3 flex gap-3 border-t border-border bg-muted/20">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-muted-foreground hover:text-foreground hover:bg-muted"
                        onClick={() => setOpen(false)}
                    >
                        Skip for now
                    </Button>
                    <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                        onClick={() => setOpen(false)}
                    >
                        Complete Setup
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
