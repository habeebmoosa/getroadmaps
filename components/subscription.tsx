import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";

interface SubscriptionProps {
    credits?: number;
}

export const Subscription = ({ credits }: SubscriptionProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <p className="text-white text-center">Manage Subscription</p>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="space-y-2">
                    <DialogTitle className="text-2xl">Subscription</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                    <h4 className="text-lg">Current Subscription</h4>
                    <div className="flex flex-col gap-3 bg-slate-800 py-4 px-5 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-row justify-between">
                            <h3 className="text-lg text-gray-400">Subscription Type</h3>
                            <p className="text-white">Free</p>
                        </div>
                        <div className="h-[1px] bg-gray-300" />
                        <div className="flex flex-row justify-between">
                            <h3 className="text-lg text-gray-400">Credits</h3>
                            <p className="text-white">{credits}</p>
                        </div>
                        <div className="h-[1px] bg-gray-300" />
                        <div className="flex flex-row justify-between">
                            <h3 className="text-lg text-gray-400">Subscription Status</h3>
                            <p className="text-white">Active</p>
                        </div>
                        <div className="h-[1px] bg-gray-300" />
                        <div className="flex flex-row justify-between">
                            <h3 className="text-lg text-gray-400">Subscription Expires</h3>
                            <p className="text-white">Never</p>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Upgrade</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};