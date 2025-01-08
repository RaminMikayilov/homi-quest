"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { Card } from "@/components/ui/card";
import FormContainer from "../form/FormContainer";
import RatingInput from "../form/inputs/RatingInput";
import TextAreaInput from "../form/inputs/TextAreaInput";
import { SubmitButton } from "../form/buttons/SubmitButton";

function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="your thoughts on this property"
              defaultValue="Amazing place !!!"
            />
            <SubmitButton text="Submit" className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
