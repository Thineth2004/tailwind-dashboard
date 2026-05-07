import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Components() {
    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-2xl font-semibold">
                    Components
                </h1>
            </div>

            <p className="text-sm text-gray-500 mt-1">
                Reusble UI system
            </p>

            <Card>
                <div className="flex gap-4">
                    <Button variant="primary">
                        Primary
                    </Button>

                    <Button variant="secondary">
                        Secondary
                    </Button>

                    <Button variant="danger">
                        Danger
                    </Button>
                </div>
            </Card> 

        </div>
    );
}